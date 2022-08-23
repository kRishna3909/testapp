import { useFormik ,Formik,Form, Field ,ErrorMessage} from "formik";
import LoginAPI from "../../../Services/loginAPI";
import React  from "react";
const initialValues ={
    name:' ',
    email:' '
}
const onSubmit=(values)=>{
    alert(`${values.name}  and ${values.email}`)
}

const validate=(values)=>{
    let errors={ }
    
    if(!values.email){
        errors.email='Required'
        console.log('ku')
    } else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(values.email)){
        errors.email='Invalid Email format'
    }

    if(!values.name){
        errors.name='Required'
        console.log('fg')
    }
    
    return errors
}


const Loginfrom=()=>{
    
 
    return(
        <>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
            <Form className="d-flex flex-column mx-auto w-25 gap-3">

                <label htmlFor="name"> Name</label>
                <Field type='text'  id="name" name="name"  ></Field>
                <ErrorMessage name='name'/>

                <label htmlFor="email">E-mail</label>
                <Field type='email' id="email" name="email" ></Field>
                <ErrorMessage name='email'/>
                
                <button type="submit">Login</button>

                    {/* boilerplate code getFieldProps
                    <input type='text'  id="name" name="name"  {...formik.getFieldProps('name')}></input>
                    { formik.touched.name && formik.errors.name?<h5>{formik.errors.name}</h5>:null}

                    <label htmlFor="email">E-mail</label>
                    <input type='email' id="email" name="email"  {...formik.getFieldProps('email')}></input>
                    {formik.errors.email?<h5>{formik.errors.email}</h5>:null}
                    */}

                
            </Form>
        </Formik>
        </>
    )
}
export default Loginfrom