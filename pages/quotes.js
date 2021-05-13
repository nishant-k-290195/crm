const axios = require('axios')
import { Formik, Form } from 'formik'
import quoteStyles from '../styles/Quote.module.css'
import MyTextInput from  '../FormControls/MyTextInput'
import MyMaskedTextInput from  '../FormControls/MyMaskedTextInput'
import MyDateInput from  '../FormControls/MyDateInput'
import MyTextArea from  '../FormControls/MyTextArea'
import {useState} from 'react'
import ItemsList from '../components/ItemsList'

const handleClick = async () => {
  try{
    const res = await axios.post('/api/generateQuotePdf')
    if(res.status === 200){
      window.open("/temp/quote.pdf")
    }

  }catch(err){
    alert(err)
  }
}

const addItem = (props) => {

}
const quotes = () => {
  const [count, setCount] = useState(1426)
  return (
    <>
      <Formik
        initialValues={{
          quoteNumber: count,
          quoteDate:'',
          fullName: '',
          cName: '',
          streetAddress:'',
          city: '',
          state:'',
          zip: '',
          deliveryDate:'',
          pickupDate: '',
          items:{
            item:'',
            desc:'',
            qty:'',
            rate:'',
            amount: '',
          },
          instructions: '',
          note:'',
        }}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            setCount(count+1)
          }, 400);
        }}
      >
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
                    label="Company"
                    name="cName"
                    type="text"
                    autoComplete="off"
                  />
                </div>

                <div className={quoteStyles.right}>
                  <h4>Quote Number # {`19545`} </h4>
                  <h4>{`May 12, 2021`}</h4>
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
                  <MyTextArea
                    label="Customer Instructions"
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
                  name = "note"
                  type = "text"
                  className={quoteStyles.section6TextArea}
                />
              </div>
              <div className={quoteStyles.section7}>
                <button type="submit">Save</button>
                <button>Email</button>
                <button onClick={handleClick} type="button">Preview Quote</button>
                <button>Create Sales Order</button>
                <button>Clear</button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default quotes
