import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SalesOrderFormStyles from '../styles/SalesOrderForm.module.css'

const MyDateInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const {setValue} = helpers
  return (
    <div>
      <label className={SalesOrderFormStyles.label} htmlFor={props.id || props.name}>{label}</label>
      <DatePicker className={`${SalesOrderFormStyles.input} ${SalesOrderFormStyles.date}`} {...field} {...props} selected={field.value} onChange={value => setValue(value)}/>
      {meta.touched && meta.error ? (
        <div className={SalesOrderFormStyles.error}>{meta.error}</div>
      ) : null}
    </div>
  )
}

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// And now we can use these
const SalesOrderForm = () => {
  return (
    <>
      <h1>Quote</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="Quote #"
            name="quote"
            type="text"
          />

          <MyTextInput
            label="Customer Name"
            name="fullName"
            type="text"
          />

          <MyTextInput
            label="Delivery Address."
            name="address"
            type="address"
          />

          <MyDateInput
            label="Delivery Date."
            name="address"
            type="address"
          />

          <MyDateInput
            label="Pickup Date."
            name="address"
            type="address"
          />

          <button type="submit">Generate Sales Order</button>
        </Form>
      </Formik>
    </>
  );
};


export default SalesOrderForm