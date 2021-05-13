import { useField } from 'formik'
import formControlStyles from '../styles/FormControls.module.css'

const MyTextInput  =  ({ label, ...props })  => {
  const [field, meta]  =  useField(props);
  return (
    <div className={formControlStyles.textInput}>
      <label htmlFor = {props.id || props.name}>{label}</label>
      <input className = "text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className = "error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextInput