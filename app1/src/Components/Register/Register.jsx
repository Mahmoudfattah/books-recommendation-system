
import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'

export default function Register() {
  let [error, setError] = useState('')
  let navigate = useNavigate()
  let [loading, setLoading] = useState(false)

  async function submitForm(values) {
    setLoading(true)
    let { data } = await axios.post(`http://localhost:3000/api/v1/auth/signUp`, values).catch((err) => {
      setError(err.response.data.message)
      setLoading(false)
    })

    if (data && data.message === 'success') {
      setError('')
      setLoading(false)
      navigate('/login')
    }
  }

  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'min length is 2 char').max(7, 'max is 7 char').required('name is required'),
    email: Yup.string().email('email not valid').required('email is required'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'password not match').required('password is required'),
    rePassword: Yup.string().oneOf([Yup.ref('password')], 'repassword not match').required('repassword is required'),
    phone: Yup.string().matches(/^(002)?01[0-25][0-9]{8}$/, 'phone not match').required('phone is required')
  })

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: ''
    },
    validationSchema,
    onSubmit: submitForm
  })

  return (
    <div className="container">
      <form className='w-75 mx-auto my-5' onSubmit={formik.handleSubmit}>
        {error && <p className='alert alert-danger'>{error}</p>}
        <h2>Register Form</h2>
        <label htmlFor='name'>name:</label>
        <input type='text' className='form-control mb-3' id='name' name='name' onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} />
        {formik.errors.name && formik.touched.name && <p className='alert alert-danger'>{formik.errors.name}</p>}
        <label htmlFor='email'>email:</label>
        <input type='email' className='form-control mb-3' id='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.email && formik.touched.email && <p className='alert alert-danger'>{formik.errors.email}</p>}
        <label htmlFor='password'>password:</label>
        <input type='password' className='form-control mb-3' id='password' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.password && formik.touched.password && <p className='alert alert-danger'>{formik.errors.password}</p>}
        <label htmlFor='rePassword'>rePassword:</label>
        <input type='password' className='form-control mb-3' id='rePassword' name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.rePassword && formik.touched.rePassword && <p className='alert alert-danger'>{formik.errors.rePassword}</p>}
        <label htmlFor='phone'>phone:</label>
        <input type='number' className='form-control mb-3' id='phone' name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.phone && formik.touched.phone && <p className='alert alert-danger'>{formik.errors.phone}</p>}
        {loading ? (
          <button className='btn btn-success ms-auto d-block mt-3'>
            <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="60" visible={true} />
          </button>
        ) : (
          <button type='submit' className='btn btn-primary float-end'>Register</button>
          
        )}
      </form>
    </div>
  )
}
