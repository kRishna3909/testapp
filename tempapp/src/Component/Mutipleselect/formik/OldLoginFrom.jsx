import { useFormik } from "formik";
import React  from "react";
import axios from "axios";
import * as Yup from 'yup'
import './loginform.css'
//#43AE9E
const initialValues={
    name:' ',
    email:' ',
    password:' '
}
const onSubmit=(values)=>{
    console.log(values)
    axios.post('http://localhost:3000/createUser',values).then((res)=>{
            console.log(res)
          }).catch((err)=>{
            console.log(err)
          })
}
 
// const validate=(values)=>{
//     let errors={ }
    
//     if(!values.email){
//         errors.email='Required'
//         console.log('ku')
//     } else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(values.email)){
//         errors.email='Invalid Email format'
//     }

//     if(!values.name){
//         errors.name='Required'
//         console.log('fg')
//     }
    
//     return errors
// }

const validationSchema=Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().required('Required'),
    password:Yup.string().min(3).max(8).required('Required')
})
const OldLoginfrom=()=>{
    const formik = useFormik({
                        initialValues,
                        onSubmit,
                        //validate,
                        validationSchema
                    })
    //console.log('formik errors ',formik.errors )
    //console.log('blur' ,formik.touched)
    return(
        <>
        <form className="d-flex flex-column mx-auto w-25 gap-3" onSubmit={formik.handleSubmit}>
             <h1 className="heading">Login</h1>
            
            <input className="mx-auto w-75 px-2" type='text'  id="name" name="name" placeholder="Name"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}></input>
            { formik.touched.name && formik.errors.name?<h5>{formik.errors.name}</h5>:null}

            {/* <label htmlFor="email">E-mail</label> */}
            <input className="mx-auto w-75 px-2" type='email' id="email" name="email" placeholder="E-mail" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.email}></input>
            {formik.errors.email?<h5>{formik.errors.email}</h5>:null}

             
            <input className="mx-auto w-75 px-2" type='password' id="password" name="password" placeholder="Password" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.password}></input>
            {formik.errors.password?<h5>{formik.errors.password}</h5>:null}
            <button type="submit" className="mx-auto px-4 py-1">Login</button>
        </form>
        </>
    )
}
export default OldLoginfrom