import React from "react";
import { useState } from "react";
// import { Form } from "react-bootstrap";
import './LoginFormtmp.css'
//import * as Yup from 'yup'
import { userSchema } from "../../Validations/Uservalidaion";
import axios from "axios";

// const validationSchema= Yup.object().shape({
//     name: Yup.string().required('Name is required').name('Invalid'),
//     email:Yup.string().required('Email is required').email('Email is invalid'),
//     password:Yup.string().min(8).required('Required')
// })

const LoginFormTemp = () => {
     const [name,setName]=useState({})
    // const [email,setEmail]=useState(' ')
    // const [pass,setPass]=useState()
    // const [logged,setLogged]=useState(false)
    // const [error,setError]=useState(false)
    // const handlesubmit=(e)=>{
    //     e.preventDefault()
    //     if(name ==='krishna' && email ==='krish@1234'){
    //         console.log('logged in')
    //         setLogged(true)
    //     }
    //     //else{
    //     //     console.log('error')
    //     //     //setLogged(false)
    //     //    // setError('Invalid')
    //     // }
    //    console.log(name,email,pass)
    // }
    // // const handleLogout=(e)=>{
    // //     console.log(e)
    // // }
    
    const handleSubmit= async (e)=>{
        e.preventDefault()
        console.log('event',e)
        let formData={
            name:e.target[0].value,
            email:e.target[1].value,
            password:e.target[2].value,
        }
        const isValid=  await userSchema.isValid(formData)
        if(isValid){
          
           setName(formData)
          axios.post('http://localhost:3000/createUser',name).then((res)=>{
            console.log(res)
          }).catch((err)=>{
            console.log(err)
          })

        }
       
        alert(`${isValid}`)
    }
    
    return (
        <>
          <form className="main" onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter your name'></input><br/>
            <input type='text' placeholder='xyz@gmail.com'></input><br/>
            <input type='text' placeholder='Password'></input><br/>
            <button type="submit">LogIn</button>
          </form>
        </>
        // <div className="main">
        //     {/* {logged?<div>
        //         <h1>You have successfully logged In..!!</h1>
        //         <button onClick={handleLogout}>Logout</button>
        //         </div>:<h1>{error}</h1>} */}
        //     <form className="loginForm" onSubmit={handlesubmit}>
        //         <div className="label-div">
        //             <label className="label-div">Name</label>
        //             <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} ></input>
        //         </div>
        //         <div>
        //             <label className="label-div">Email</label>
        //             <input type='text'  value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'></input>
        //         </div>

        //         <div>
        //             <label className="label-div">Password</label>
        //             <input type='password' value={pass} onChange={(e)=>{setPass(e.target.value)}}></input>
        //         </div>
        //         <button> Login </button>
        //     </form>
        // </div>
    )

}
export default LoginFormTemp