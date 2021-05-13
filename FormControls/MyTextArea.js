import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'
import formControlStyles from '../styles/FormControls.module.css'

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className={formControlStyles.textArea}>
      <label className={formControlStyles.label} htmlFor={props.id || props.name}>{label}</label>
      <textarea className={formControlStyles.textarea} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={formControlStyles.error}>{meta.error}</div>
      ) : null}
    </div>
  )
}


export default MyTextArea