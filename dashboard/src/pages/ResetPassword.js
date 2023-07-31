import React from 'react'
import logo from '../images/logo.png'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
  return (
    <div className='main-content py-5'>
      <div className='admin-content-form my-5 w-25 mx-auto p-4'>
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <img src={logo} className='img-fluid' />
        </div>
        <h5 className='text-center'>Reset Password</h5>
        <p className='text-center'>Please Enter your new password.</p>
        <form action=''>
          <CustomInput
            type="password"
            className="form-control"
            id="pass"
            label="New Password"
          />
          <CustomInput
            type="password"
            className="form-control"
            id="confirmpass"
            label="Confirm Password"
          />
          <button
            className='btn-login border-0 px-3 py-2 text-white fw-bold w-100'
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword