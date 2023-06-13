
import { useState, useEffect } from "react";

const Form = () => {

    
    const [formValues, setFormValues] = useState({username: "", email: "", password: ""});
   const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] =  useState(false)


    const handleChange = (e) => {
        setFormValues({...formValues,[e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
       
        const {username,email,password} =formValues;
        if(username && email&& password ) {

        e.preventDefault()
        setIsSubmit(true)
        setFormErrors(validate(formValues))
        }
    }



    

    const validate = (values) => {
        const errors = {}

        if(!values.username) {
            errors.username = "User name is required"

        }
        if (!values.email) {
            errors.email = "Email is required"
        }

        if(!values.password){
            errors.password = "  password is required"
        }
        
        else if(values.password.length<4) {

            errors.password = "password length should be more than 4 "

        }

        else if (values.password.length>10){
            errors.password = "password length should not be more than 10"
        }

        return errors
    }
    

  return (
    <div>Form

<form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
