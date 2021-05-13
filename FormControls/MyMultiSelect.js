import { useField } from 'formik'
import formControlStyles from '../styles/FormControls.module.css'
import Select from 'react-select'

const options = [
  { value: 'SPR', label: 'Standard Portable Restroom' },
  { value: 'DFR', label: 'Deluxe Flushable Restroom' },
  { value: 'ACR', label: 'ADA Portable Restroom' },
  { value: 'HWS', label: 'Hand Wash Sink Station' }
]

const customStyles = {
  control: base => ({
    ...base,
    border: 'solid 1px rgba(0, 0, 0, 0.37)',
    boxShadow: 'none'
  })
}

const MyMultiSelect = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const {setValue} = helpers
  return (
    <div className={formControlStyles.multiSelect}>
      <label className={quoteStyles.label} htmlFor={props.id || props.name}>{label}</label>
      <Select styles={customStyles} {...field} {...props} onChange={value => setValue(value)}/>
      {meta.touched && meta.error ? (
        <div className={quoteStyles.error}>{meta.error}</div>
      ) : null}
    </div>
  )
}


export default MyMultiSelect