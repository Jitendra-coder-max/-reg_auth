import React from 'react'
import  './Homepage.css'
const Homepage = ({setLoginuser}) => {
  return (
    <div className='homepage'>
        <h1>Homepage</h1>

        <div className='button' onClick={() => setLoginuser({})}>Logout</div>
        </div>
        
  )
}

export default Homepage