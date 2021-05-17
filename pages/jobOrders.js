const axios = require('axios')
import { Formik, Form } from 'formik'
import jobOrderStyles from '../styles/JobOrder.module.css'
import MyTextInput from  '../FormControls/MyTextInput'
import MyMaskedTextInput from  '../FormControls/MyMaskedTextInput'
import MyDateInput from  '../FormControls/MyDateInput'
import MyTextArea from  '../FormControls/MyTextArea'
import {useContext} from 'react'
import {ItemsContext} from '../contexts/ItemsListArrayContext'
import ItemsList from '../components/ItemsList'
import CurrentDate, {currentLongDate} from '../components/CurrentDate'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const handlePrintjobOrder = async () => {
  try{
    const res = await axios.post('/api/jobOrder/pdf/generatePdf')
    if(res.status === 200){
      window.open("/temp/jobOrder.pdf")
    }

  }catch(err){
    alert(err)
  }
}

const handleEmail = async () => {
  try{
    const res = await axios.post('/api/jobOrder/email/sendEmail')
    if(res.status === 200){
      alert(`Email Sent`)
    }

  }catch(err){
    alert(err)
  }
}

const jobOrder = () => {
  const [itemRowArray, setItemRowArray] = useContext(ItemsContext)
  return (
    <>
      <Formik
        initialValues={{
          jobOrderNumber: '',
          vendorLogo: '',
          repName: '',
          vendor: '',
          vendorAddress: '',
          vendorEmail: '',
          vendorPhone: '',
          vendorFax: '',
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
            const res = await axios.post('/api/jobOrder/jobOrder', { values, itemRowArray, currentLongDate })
            if(res.status === 200){
              alert("Saved")
            }
          }catch(err){
            alert(err)
          }
        }}
      >
      {
        ({isSubmitting}) => (
          <Form>
          <div className={jobOrderStyles.section}>
            <div className={jobOrderStyles.container}>
              <div className={jobOrderStyles.section1}>
                <div className={jobOrderStyles.left}>
                  <h5>Vendor Details</h5>
                  <MyTextInput
                    label="Vendor Logo"
                    name="vendorLogo"
                    type="file"
                    autoComplete="off"
                  />
                  <MyTextInput
                    label="Representative Name"
                    name="repName"
                    type="text"
                    autoComplete="off"
                  />
                  <MyTextInput
                    label="Vendor Name"
                    name="vendor"
                    type="text"
                    autoComplete="off"
                  />
                  <MyTextInput
                    label="Vendor Address"
                    name="vendorAddress"
                    type="text"
                    autoComplete="off"
                  />
                  <MyTextInput
                    label="Vendor Email"
                    name="vendorEmail"
                    type="text"
                    autoComplete="off"
                  />
                  <MyTextInput
                    label="Vendor Phone"
                    name="vendorPhone"
                    type="text"
                    autoComplete="off"
                  />
                  <MyTextInput
                    label="Vendor Fax"
                    name="vendorFax"
                    type="text"
                    autoComplete="off"
                  />
                </div>

                <div className={jobOrderStyles.right}>
                  <MyTextInput
                    label="Job Order # "
                    name="jobOrderNumber"
                    type="text"
                    autoComplete="off"
                  />
                  <CurrentDate 
                    name="date"
                  />
                </div>
              </div>
              <div className={jobOrderStyles.section2}>
                <div className={jobOrderStyles.left}>
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
                <div className={jobOrderStyles.right}>
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
                    label="Customer Instructions"
                    name="instructions"
                    type="text"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className={jobOrderStyles.section5}>
                <ItemsList />
              </div>
              <hr />
              <div className={jobOrderStyles.section6}>
                <MyTextArea
                  label="Note"
                  name="note"
                  type="text"
                  className={jobOrderStyles.section6TextArea}
                />
              </div>
              <div className={jobOrderStyles.section7}>
                <button type="submit">Save</button>
                <button onClick={handlePrintjobOrder} type="button">Preview Job Order</button>
                <button onClick={handleEmail}>Email</button>
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

export default jobOrder
