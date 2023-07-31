import React from 'react'
import CustomInput from '../components/CustomInput'
import './Login.scss'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='main-content py-5'>
      <div className='admin-content-form my-5 w-25 mx-auto p-4'>
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <img src={logo} className='img-fluid' />
        </div>
        <h5 className='text-center'>Login</h5>
        <p className='text-center'>Login to your account to continue.</p>
        <form action=''>
          <CustomInput
            type="text"
            className="form-control"
            id="email"
            label="Your email"
          />
          <CustomInput
            type="password"
            className="form-control"
            id="password"
            label="Enter Password"
          />
          <div className='mb-3 text-end'>
            <Link to='/forgot-password' className='text-decoration-none text-danger'>Forgot Password?</Link>
          </div>
          <Link
            to="/admin"
            className='btn-login border-0 px-3 py-2 text-white fw-bold w-100'
            type='submit'
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login