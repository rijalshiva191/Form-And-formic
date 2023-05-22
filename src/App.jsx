import React from 'react'
import * as Yup from 'yup'

const App = () => {

  const handleSubmit = async (event)=>{
    event.preventDefault();

      const contactFormSchema = Yup.object({
        email:Yup.string().required().email(),
        password:Yup.string().required().min(7).max(20),
        address:Yup.string().required().min(8),
        contact:Yup.number().positive().required( )
      });


    const formData={
      email:event.target[0].value,
      password:event.target[1].value,
      address: event.target[2].value,
      contact: event.target[3].value,

    }
  const isValid = await contactFormSchema.isValid(formData);
  console.log(isValid);


  }
  return (

    <div>
        <form onSubmit={handleSubmit} autoComplete="off">
        Name:
        <input type= "text" name="email"/>
        <br />
        password:
        <input type= "text" name="password"/>
        <br/>
        Address:
        <input type= "text" name="address"/>
        <br />
        <input type= "text" name="contact"/>
        <br />
        <input type="submit" value="submit" />
        </form>  

    </div>
  )
}

export default App
