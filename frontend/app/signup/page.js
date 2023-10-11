'use client'
import React from 'react'
import {useFormik} from 'formik';
import {basicSchema} from '../components/schema/index';

const Page = () => {
        const {values ,errors, touched, handleBlur  , handleChange , handleSubmit} = useFormik({
            initialValues: {
                email:"",
                password:"",
                firstname:'',
                lastname:'',

            },
            validationSchema : basicSchema

        });
        console.log(errors);

  return (
    <div className='flex flex-col items-center pt-10'>

            <form className='flex flex-col w-[25rem] h-[30rem] pt-7 rounded-2xl items-center space-y-3 bg-gray-600'>

                <label htmlFor='email'>Email</label>
                <input type='email' className={`${errors.email && touched.email &&  "border-red-600"} border-2 rounded`}  name='email' id='email' value={values.email} onBlur={handleBlur} onChange={handleChange} ></input>
                 
                <label htmlFor='password'>Password</label>
                <input type='password' className={`${errors.password && touched.password &&  "border-red-600"} border-2 rounded`} name='password' id='password' value={values.password} onBlur={handleBlur} onChange={handleChange} ></input>
            
                <label htmlFor='firstname'>First Name</label>
                <input type='text' className={`${errors.firstname && touched.firstname &&  "border-red-600"} border-2 rounded`} name='firstname' id='firstname' value={values.firstname} onBlur={handleBlur} onChange={handleChange} ></input>
            
                <label htmlFor='lastname'>Last Name</label>
                <input type='text' className={`${errors.lastname && touched.lastname &&  "border-red-600"} border-2 rounded`} name='lastname' id='lastname' value={values.lastname} onBlur={handleBlur} onChange={handleChange} ></input>
            
              <button type='submit' onClick={()=>handleSubmit} >Save</button>
            
            </form>

    </div>
  )
}

export default Page