import { useField } from 'formik'
import formControlStyles from '../styles/FormControls.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDateInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const {setValue} = helpers
  return (
    <div className={formControlStyles.dateInput}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <DatePicker className={`${formControlStyles.input} ${formControlStyles.date}`} {...field} {...props} minDate={new Date()} selected={field.value} onChange={value => setValue(value)}/>
      {meta.touched && meta.error ? (
        <div className={formControlStyles.error}>{meta.error}</div>
      ) : null}

    </div>
  )
}

export default MyDateInput