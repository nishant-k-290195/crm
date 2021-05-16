import MyTextInput from  '../FormControls/MyTextInput'
import MySelect from  '../FormControls/MySelect'
import quoteStyles from '../styles/Quote.module.css'
import itemRowStyles from '../styles/ItemRow.module.css'
import {ItemsContext} from '../contexts/ItemsListArrayContext'
import {useContext, useState} from 'react'
import {FaDollarSign} from 'react-icons/fa';

const ItemsList = () => {
  const [itemRowArray, setItemRowArray] = useContext(ItemsContext)
  const [values, setValues] = useState({
    item:'',
    desc:'',
    qty:'',
    rate:'',
    amount: '',
    totalAmount: ''
  })

  const handleChange = (event) => {
    setValues(prevValues => ({ ...prevValues, [event.target.name]: event.target.value }))
  }

  const addItemRow = (newItemRow) => {
    setItemRowArray(prevValues => ([...prevValues, newItemRow]))
  }

  const handleAdd = (event) => {
    event.preventDefault()
    addItemRow(values)
    console.log(values)
  }

  const removeItemRow = (id) => {
    setItemRowArray(prevValues => {
      return prevValues.filter((itemRowArray, index) => {
        return (
          index !== id
        )
      }
    )})
  }

  const totalAmount = itemRowArray.reduce((accumulator, currentValue) => {
     return accumulator + (currentValue.qty * currentValue.rate)
  }, 0)

  return (
    <div>
      <div className={quoteStyles.section5Items}>
        <div>
          <h4>ITEMS</h4>
          <MySelect name = "item" className = {quoteStyles.item} onChange={handleChange}>
            <option value = "none">Select Items</option>
            <option value = "Standard Portable Restroom">Standard Portable Restroom</option>
            <option value = "Flushable Restroom-Sink inside">Flushable Restroom-Sink inside</option>
            <option value = "ADA-Compliant Portable Restroom">ADA-Compliant Portable Restroom</option>
            <option value = "Hand Washing Sink Station">Hand Washing Sink Station</option>
            <option value = "Delivery Charge">Delivery Charge</option>
            <option value = "Sales Tax">Sales Tax</option>
            <option value = "Pickup Charge">Pickup Charge</option>
            <option value = "Fuel Surcharge">Fuel Surcharge</option>
            <option value = "Extra Service Charge">Extra Service Charge</option>
            <option value = "Environmental charges">Environmental charges</option>
            <option value = "Other Charges">Other Charges</option>
          </MySelect>
        </div>
        <div>
          <h4>DESCRIPTION</h4>
          <MyTextInput
            name = "desc"
            type = "text"
            className = {quoteStyles.desc}
            onChange={handleChange}
          />
        </div>
      
        <div>
          <h4>QUANTITY</h4>
          <MyTextInput
            name = "qty"
            type = "text"
            className = {quoteStyles.qty}
            onChange={handleChange}
          />
        </div>

        <div>
          <h4>RATE</h4>
          <MyTextInput
            name = "rate"
            type = "text"
            className = {quoteStyles.rate}
            onChange={handleChange}
          />
        </div>

        <div>
          <h4>AMOUNT</h4>
          <MyTextInput
            name = "amount"
            type = "text"
            className = {quoteStyles.amount}
            value={values.qty*values.rate}
            readOnly
          />
        </div>
        <div>
          <h4>ADD</h4>
          <button onClick={handleAdd} type="submit">Add</button>
        </div>
      </div>
    {
      itemRowArray.map((itemRow, index) => {
        const {item, desc, qty, rate, amount} = itemRow
        return(
          <div key={index} id={index} className={itemRowStyles.itemRow}>
            <div><h4>{item}</h4></div>
            <div><h4>{desc}</h4></div>
            <div><h4>{qty}</h4></div>
            <div><h4>{rate}</h4></div>
            <div><h4>{amount}</h4></div>
            <div><button onClick={(event) => {
              event.preventDefault()
              removeItemRow(index)
            }}>Remove</button></div>
          </div>
        )
      })
    }
      <div className={quoteStyles.total}>
        <h4>Total Amount:</h4>
        <MyTextInput
            name="totalAmount"
            type="text"
            className={quoteStyles.totalAmount}
            value={totalAmount} 
            readOnly
          />
      </div>
    </div>
  )
}

export default ItemsList
