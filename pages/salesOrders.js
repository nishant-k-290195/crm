const axios = require('axios')
import { Formik, Form } from 'formik'
import quoteStyles from '../styles/Quote.module.css'
import MyTextInput from  '../FormControls/MyTextInput'
import MyMaskedTextInput from  '../FormControls/MyMaskedTextInput'
import MyDateInput from  '../FormControls/MyDateInput'
import MyTextArea from  '../FormControls/MyTextArea'
import {useContext} from 'react'
import {ItemsContext} from '../contexts/ItemsListArrayContext'
import ItemsList from '../components/ItemsList'
import CurrentDate, {currentLongDate} from '../components/CurrentDate'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const handlePrintQuote = async () => {
  try{
    const res = await axios.post('/api/salesOrder/pdf/generatePdf')
    if(res.status === 200){
      window.open("/temp/salesOrder.pdf")
    }

  }catch(err){
    alert(err)
  }
}

const handleEmail = async () => {
  try{
    const res = await axios.post('/api/salesOrder/email/sendEmail')
    if(res.status === 200){
      alert(`Quote Sent`)
    }

  }catch(err){
    alert(err)
  }
}

const salesOrders = () => {
  const [itemRowArray, setItemRowArray] = useContext(ItemsContext)
  return (
    <>
      <Formik
        initialValues={{
          salesOrderNumber: '',
          fullName: '',
          email:'',
          cName: '',
          streetAddress:'',
          city: '',
          state:'',
          zip: '',
          deliveryDate:'',
          pickupDate: '',
          onsitePerson: '',
          onsitePhone: '',
          instructions: '',
          note:'',
        }}

        onSubmit={ async (values, { setSubmitting, resetForm }) => {
          try{
            await sleep(500);
            // alert(JSON.stringify(values, null, 2))
            const res = await axios.post('/api/salesOrder/salesOrder', { values, itemRowArray, currentLongDate })
            if(res.status === 200){
              // alert("Saved")
            }
          }catch(err){
            alert(err)
          }
        }}
      >
      {
        ({isSubmitting}) => (
          <Form>
          <div className={quoteStyles.section}>
            <div className={quoteStyles.container}>
              <div className={quoteStyles.section1}>
                <div className={quoteStyles.left}>
                  <h5>Customer Personal Details</h5>
                  <MyTextInput
                    label="Name"
                    name="fullName"
                    type="text"
                    autoComplete="off"
                  />
                  <MyTextInput
                    label="Email"
                    name="email"
                    type="text"
                      autoComplete="off"
                  />
                  <MyTextInput
                    label="Company"
                    name="cName"
                    type="text"
                    autoComplete="off"
                  />
                </div>

                <div className={quoteStyles.right}>
                  <MyTextInput
                    label="Sales Order # "
                    name="salesOrderNumber"
                    type="text"
                    autoComplete="off"
                  />
                  <CurrentDate 
                    name="date"
                  />
                </div>
              </div>
              <div className={quoteStyles.section2}>
                <div className={quoteStyles.left}>
                  <h5>Delivery Details</h5>
                  <MyTextInput
                    label="Street Address"
                    name="streetAddress"
                    type="text"
                    autoComplete="off"
                  />
                  <MyTextInput
                    label="City"
                    name="city"
                    type="text"
                    autoComplete="off"
                  />
                  <MyTextInput
                    label="State"
                    name="state"
                    type="text"
                    autoComplete="off"
                  />
                  <MyMaskedTextInput
                    label="Zip Code"
                    name="zip"
                    mask="99999"
                    maskChar=" "
                    type='tel'
                    autoComplete="off"
                  />
                </div>
                <div className={quoteStyles.right}>
                  <MyDateInput
                    id="deliveryDate"
                    name="deliveryDate"
                    dateFormat="MMMM d, yyyy"
                    label="Delivery Date" 
                    autoComplete="off"
                  />
                  <MyDateInput
                    name="pickupDate"
                    dateFormat="MMMM d, yyyy"
                    label="Pickup Date"
                    autoComplete="off"
                  />
                  <MyTextInput
                    label="Onsite Person"
                    name="onsitePerson"
                    type="text"
                    autoComplete="off"
                  />
                  <MyTextInput
                    label="Onsite Phone"
                    name="onsitePhone"
                    type="text"
                    autoComplete="off"
                  />
                  <MyTextArea
                    label="Instructions"
                    name="instructions"
                    type="text"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className={quoteStyles.section5}>
                <ItemsList />
              </div>
              <hr />
              <div className={quoteStyles.section6}>
                <MyTextArea
                  label="Note"
                  name="note"
                  type="text"
                  className={quoteStyles.section6TextArea}
                />
              </div>
              <div className={quoteStyles.section7}>
                <button type="submit">Save</button>
                <button onClick={handlePrintQuote} type="button">Preview Sales Order</button>
                <button onClick={handleEmail}>Email</button>
                <button>Create Job Order</button>
                <button type="reset">Clear</button>
              </div>
            </div>
          </div>
        </Form>
        )
      }
      </Formik>
    </>
  )
}

export default salesOrders
