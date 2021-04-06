import { useContext } from 'react'
import { GlobalContext } from '../components/context/GlobalState'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';


const MyTextInput  =  ({ label, ...props })  => {
  const [field, meta]  =  useField(props);
  return (
    <>
      <label htmlFor = {props.id || props.name}>{label}</label>
      <input className = "text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className = "error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelect  =  ({ label, ...props })  => {
  const [field, meta]  =  useField(props);
  return (
    <div>
      <label htmlFor = {props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className = "error">{meta.error}</div>
      ) : null}
    </div>
  );
};

import React from 'react'

const CreateLeads  =  (props)  => {

  const {addLead} = useContext(GlobalContext)

  return (
    <div>
      <Formik
        initialValues = {    
        {
          fName : "",
          lName : "",
          cName : "",
          email : "",
          phone : "",
          fax : "",
          streetAddress : "",
          city : "",
          state : "",
          zipCode : "",
          country : "",
          leadSource : "",
          business : "",
          status : "",
          assignedTo : "",
        }}

        validationSchema = {Yup.object({
          fName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          cName: Yup.string()
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          phone: Yup.string()
            .required('Required'),
          fax: Yup.string()
            .required('Required'),
          streetAddress: Yup.string()
            .required('Required'),
          city: Yup.string()
            .required('Required'),
          state: Yup.string()
            .required('Required'),
          zipCode: Yup.string()
            .required('Required'),
          country: Yup.string()
            .required('Required'),
          leadSource: Yup.string()
            .required('Required'),
          business: Yup.string()
            .required('Required'),
          status: Yup.string()
            .required('Required'),
          assignedTo: Yup.string()
            .required('Required'),
        })}

        onSubmit = {(lead, { setSubmitting }) => {
          addLead(lead)
        }}
      >
        <Form>
          <MyTextInput
            label = "First Name"
            name = "fName"
            type = "text"
          />

          <MyTextInput
            label = "Last Name"
            name = "lName"
            type = "text"
          />

          <MyTextInput
            label = "Company"
            name = "cName"
            type = "text"
          />
          <MyTextInput
            label = "Email Address"
            name = "email"
            type = "email"
          />

          <MyTextInput
            label = "Phone"
            name = "phone"
            type = "text"
          />
          <MyTextInput
            label = "Fax"
            name = "fax"
            type = "text"
          />

          <MyTextInput
            label = "Street Address"
            name = "streetAddress"
            type = "text"
          />

          <MyTextInput
            label = "City"
            name = "city"
            type = "text"
          />

          <MyTextInput
            label = "State"
            name = "state"
            type = "text"
          />

          <MyTextInput
            label = "Zip Code"
            name = "zipCode"
            type = "text"
          />
          <MyTextInput
            label = "Country"
            name = "country"
            type = "text"
          />

          <MySelect name = "leadSource" label = "Lead Source">
            <option value = "">none</option>
            <option value = "web">Web</option>
            <option value = "call">Call</option>
            <option value = "socialMedia">Social Media</option>
          </MySelect>

          <MySelect name = "business" label = "Business">
            <option value = "">none</option>
            <option value = "quengenesis">Quengenesis</option>
            <option value = "rentAporta">Rent A Porta</option>
          </MySelect>

          <MySelect name = "status" label = "Status">
            <option value = "">none</option>
            <option value = "prospect">Prospect</option>
            <option value = "prospectWon">Prospect Won</option>
            <option value = "prospectWon">Prospect Lost</option>
          </MySelect>

          <MySelect name = "assignedTo" label = "Assigned To">
            <option value = "">none</option>
            <option value = "nash">Nash</option>
          </MySelect>
          <button type = "submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreateLeads
