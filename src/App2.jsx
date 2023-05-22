import React from 'react'
import {object,string}from "yup"
import { Formik } from "formik";
import Textfield from "./Textfield"
const App2 = () => {
  
  const userLoginSchema = object({
        email:string()
        .email("email must be a valid one" )
        .required("email chaiyo hai."),
        password:string().required().min(8).max(12),

        });
  
  
    return (
    <div>
        <Formik 
            initialValues={{email:"",password:""}} onSubmit={(data)=>{
            console.log(data)
            console.log("form Submitted successfully")} }
        
            validate={(values)=>{
                console.log("validate values:",values);
            
            if (values.email.length<5){
                return{email:"Email field is required"}
            }
            }}
            validationSchema={userLoginSchema}
            
        >

        
    {({errors,handleChange,handleSubmit,values})=>{
        
        // yo return vanda talako part ho yeha paste gareko 
        
        // <input type="text" name="email" onChange={handleChange}/>
        // {errors.email}
        // <br />
        // <label>Password</label>
        // <input type="text" name="password" onChange ={handleChange}/>
        // {errors.password}
        // <br />
        return(
            
            <form onSubmit={handleSubmit}>

        
        <label>Email</label><Textfield name="email"/><br />
        <label>Password</label> <Textfield name="password"/>
        <input type="submit"/>
        
        </form>)

    }}
        
        </Formik>
    </div>
  )
}

export default App2
