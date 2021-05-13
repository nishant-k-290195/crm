import { useField } from 'formik'
import formControlStyles from '../styles/FormControls.module.css'
import MaskedInput from 'react-input-mask'

const MyMaskedTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className={formControlStyles.maskedInput}>
      <label className={formControlStyles.label} htmlFor={props.id || props.name}>{label}</label>
      <MaskedInput className={formControlStyles.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={formControlStyles.error}>{meta.error}</div>
      ) : null}
    </div>
  )
}

export default MyMaskedTextInput