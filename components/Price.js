import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import QuantityStyles from '../styles/Quantity.module.css'

// And now we can use these
const Quantity = () => {
  return (
    <div>
      <input name='quantity'/>
    </div>
  );
};


export default Quantity