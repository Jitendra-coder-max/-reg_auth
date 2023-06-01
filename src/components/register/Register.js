import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

    const [user,setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

  const handleChange = e => {
    // console.log(e.target)
    const { name,value }  = e.target;
    // console.log(name,value)

    setUser({
        ...user,
        [name]:value
    })
  }

  const register = () => {
    console.log('registered called ')

    const { name, email, password, reEnterPassword} = user
     if(name && email && password && (password === reEnterPassword))
     {
    axios.post("http://localhost:5000/register", user)
    // .then (res => console.log(res))
    .then(res => {
      alert(res.data.message)
      navigate('/login')
    }
    )
    // alert('Posted')
    // console.log('api fetched')
     }

     else {
      alert('Invalid')
     }

  }

  return (
    <div className='register'>

        {/* {console.log(user)} */}
        <h1>Register</h1>
<input type="text" placeholder ="Enter your name"  name="name"  value={user.name} onChange={ handleChange}></input>
        <input type="text" placeholder ="Enter your email"   name="email"  value={user.email} onChange={ handleChange}></input>
        <input type="password" placeholder ="Enter password" name="password"  value={user.password} onChange={ handleChange}></input>
        <input type="password" placeholder ="Re Enter password" name="reEnterPassword"  value={user.reEnterPassword} onChange={ handleChange}></input>
        <div className='button'  onClick={register}>Register</div>
        <div>or</div>
        {/* <div className='button' >  <Link to='/login'>Login</Link></div> */}
        <div className='button'onClick={() => navigate('/login')} >  Login</div>
       
        {/* <button > click here</button> */}
        </div>
  )
}

export default Register