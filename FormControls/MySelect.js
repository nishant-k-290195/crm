import {useField } from 'formik'
import formControlStyles from '../styles/FormControls.module.css'


const MySelect  =  ({ label, ...props })  => {
  const [field, meta]  =  useField(props);
  return (
    <div className={formControlStyles.select}>
      <label htmlFor = {props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className = "error">{meta.error}</div>
      ) : null}
    </div>
  )
}

export default MySelect