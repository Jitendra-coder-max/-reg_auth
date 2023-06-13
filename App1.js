// import React ,{ useState }from 'react';
// import './App.css';
// import Child from './Child';




// function App() {

//   const arr = [
//     { name:"Jit", id:1

//     },
//     {
//       name:"Guddu", id:2
//     }
//     ,{
//       name:"Justin", id:1
//     }
//   ]

  
//   return (
//     <div className="App">

    
//       App
//   <Child  data={arr}/>
      
//     </div>
//   );
// }

// export default App;



// import React from 'react'
// import Child from './Child'
// const App = () => {

//   const person = [
//     {id:1, name:"Jit" },
//     { id:2, name:"Guddu"},
//     {id:3, name:"Rohan" }
//   ]

//   return (
//     <div>App

//       <Child data={person}/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Child from './Child'
// const App = () => {

//   const objData ={
// fruits: ['Apple','Banana', 'Orange'],
// flowers: ['rose', 'Sunflower', 'Lotus'],
// animals: ['Lion','Monkey', 'Dog']

//   }
//   return (
//     <div>App

//       <Child  data={objData}/>
//     </div>
//   )
// }

// export default App


// import React ,{useState}from 'react'
// import Child from './Child'
// const App = () => {

//   const [name, setName] = useState("Jitendra")
//   return (
//     <div>App

//       <Child  data={name} />
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {

//   const clicked = () =>
//   {
//     alert("Button clicked")
//   }

//   return (
//     <div>App

//       <button onClick={clicked}> Click here</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Child from './Child'
// const App = () => {

//   const person = {
//     id:1,name: "Jitendra Nishad"
//   }
//   return (
//     <div>App

//       <Child  data={person}/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Child from './Child'

// const App = () => {

//   const objData = ["Apple","Banana", "Orange"]


//   return (
//     <div>App
// <Child  data={objData}  />
//     </div>
//   )
// }

// export default App

// import React ,{useState}from 'react'

// const App = () => {

//   const [name,setName] = useState("")




//   const changeName = (e) => {

//  setName(e.target.value)
//  console.log(e.target.value)


//   }

//    const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`The name you entered was: ${name}`)
//     console.log(name)
//    }


//   return (
//     <div>
//       <form  onSubmit ={handleSubmit}>

//       <label>Form</label>
//       <input  type="text" placeholder="Enter  your name" value={name} onChange={changeName}/>
//       <input  type="submit" />
//       </form>
//     </div>

    
//   )
// }

// export default App

// import React ,{useState}from 'react'

// const App = () => {

//   const [name,setName] = useState('')

//   const setOne = (e)  => {
//     setName(e.target.value)

//   }


//   const handleSubmit = (e) =>{

//     alert(` My name is  ${name}`)
//   }
//   return (
//     <div>App
//         <form onSubmit={handleSubmit}>

//           <label>Form data</label>
//           <input  type="text" placeholder="Enter your name" value={name} onChange={setOne}/>

//           <p>{name}</p>
//          <input type="submit"  disabled={name.length<1}/>
//         </form>

//     </div>
//   )
// }

// export default App


// import React, {useState} from 'react'

// const App = () => {

//   const [show, hide] = useState(true)

//   const showHide = () =>
//   {
//    hide(!show)
//    console.log(hide)
//   }

//   return (


    
//     <div>App

//       <button onClick={showHide}>
//         {show ? "Hide element" : "Show elment"}Show</button>

//         {show && <h1>Toggle</h1>}
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {


// const persons = ["Jit", "prem", "Justin"]
//   return (
//     <div>App

//     <ul>
//       {persons.map((person,index) => (
//         <li key={index}>{person}</li>
//       ))}
//     </ul>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {

//   const users = [
//     { name: "John Doe", id: 1 },
//     { name: "Jane Doe", id: 2 },
//     { name: "Billy Doe", id: 3 }
//   ];
//   return (


//     <div>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   return (
//     <div>App is nice</div>
//   )
// }

// export default App

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App


// import React from 'react'
// // import BoxComponent from './BoxComponent'
// import './App.css'
// import BoxCompo from './BoxCompo'

// const App = () => {

  
  
  
//   return (
//     <div>App
//       {/* <BoxComponent /> */}

//       {/* <BoxCompo /> */}





//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Child from './Child'



// const App = () => {

//   const person = [
//         {id:1, name:"Jit" },
//         { id:2, name:"Guddu"},
//         {id:3, name:"Rohan" }
//       ]
//   return (
//     <div>App


//       <Child  data={person}/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Child from './Child'

// const App = () => {

//   const objData ={
//      fruits: ['Apple','Banana', 'Orange'],
//      flowers: ['rose', 'Sunflower', 'Lotus'],
//      animals: ['Lion','Monkey', 'Dog']
//   }
//   return (
//     <div>App

//       <Child  data ={objData}/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Countdown from './Countdown'
// import Numbercount from './Numbercount'

// import './App.css'
// import Form from './Form'


// const App = () => {
//   return (
//     <div>App

//       {/* <Countdown  inputNumber={10} /> */}
//       {/* <Numbercount /> */}

//       {/* <Form /> */}
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Form from './Form'
// const App = () => {

//   const getData = (name, email) => { 
//     // console.log("Comming from child",name, email)
//     // alert(name)
//     console.log(name,email)
//     // alert(`This is an alert! ${name}`);

    
//   };

//   return (
//     <div>App
    
//       <Form onSubmit ={getData}/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import BoxCompo from './BoxCompo'
// import './App.css'
// import BoxComponent from './BoxComponent'

// const App = () => {
//   return (
//     <div>App

//         {/* <BoxCompo /> */}
//         {/* <BoxComponent /> */}
        
       
//     </div>
//   )
// }

// export default App


// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const initialValues = { username: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     // const { name, value } = e.target;
//     setFormValues({ ...formValues, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };

//   return (
//     // <div className="container">
//     //   {Object.keys(formErrors).length === 0 && isSubmit ? (
//     //     <div className="ui message success">Signed in successfully</div>
//     //   ) : (
//     //     <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
//     //   )}

//       <form onSubmit={handleSubmit}>
//         <h1>Login Form</h1>
//         <div className="ui divider"></div>
//         <div className="ui form">
//           <div className="field">
//             <label>Username</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formValues.username}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.username}</p>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={formValues.email}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.email}</p>
//           <div className="field">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.password}</p>
//           <button className="fluid ui button blue">Submit</button>
//         </div>
//       </form>
//     // </div>
//   );
// }

// export default App;

import React from 'react'
import BoxCompo from './BoxCompo'
// import Form from './Form';
// import Countdown from './Countdown'
import './App.css'
const App = () => {
  return (
    <div>App
      {/* <Form /> */}
      {/* <Countdown /> */}

      <BoxCompo />

    </div>
  )
}

export default App

