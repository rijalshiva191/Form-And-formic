import React from 'react'
import {useField} from "formik";

const Textfield = (props) => {
  const[field,meta]=useField(props.name);
  console.log(field);
    return (
    <div>
    <input type="text" {...field}{...props}/>
        {meta.error}
    <br />
    </div>
  )
}

export default Textfield
