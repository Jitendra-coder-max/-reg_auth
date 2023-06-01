import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

import {Link} from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
const Login = ({ setLoginUser}) => {

    const navigate = useNavigate();

    const [user,setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) =>
    {
//  console.log(e.target)
        const { name,value} = e.target
        // console.log(name,value)
        setUser({
            ...user,
            [name]:value
        })

    }
    const login = () => {
        axios.post('http://localhost:5000/login',user)
        // .then(res => console.log(res))
         .then(res => {alert(res.data.message)
         setLoginUser(res.data.user)
         navigate('/')
        }
         )
    
    }

  return (
    <div className='login'>

        {/* {console.log(user)} */}
       <h1> Login</h1>
       
       <input type="text" placeholder='Enter your email' name="email"  value={user.email} onChange={handleChange}></input>
       <input type="password" placeholder='Enter your Password' name='password' value={user.password} onChange={handleChange}></input>
<div className="button" onClick={  login }>Login</div>
<div>or</div>

{/* <div className='button'><Link to='/register'>Register </Link></div> */}
<div className='button' onClick={() =>  navigate('/register') }>Register </div>

        </div>
  )
}

export default Login