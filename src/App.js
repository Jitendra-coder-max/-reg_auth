


import React, { useState } from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Homepage from "./components/homepage/Homepage";

function App() {

  const [user, setLoginUser] = useState({
    name: "",
    email: "",
    password: ""
  })



  return (

    <BrowserRouter>
      <div className="App">

        <Routes>


{/* <Route exact path="/" element={user && user._id ? <Homepage /> : <Login />} /> */}
<Route exact path="/" element={user && user._id ? <Homepage  setLoginuser={setLoginUser}/> : <Login setLoginUser={setLoginUser} />} />


          {/* <Route exact path='/' element={ <Homepage />}   /> */}
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login  setLoginUser={setLoginUser}/>} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
