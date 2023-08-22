import React from 'react'
import logo from '../images/logo.png'
import CustomInput from '../components/CustomInput'

const ForgotPassword = () => {
  return (
    <div className='main-content py-5'>
      <div className='admin-content-form my-5 w-25 mx-auto p-4'>
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <img src={logo} className='img-fluid' />
        </div>
        <h5 className='text-center'>Forgot Password</h5>
        <p className='text-center'>Please enter your register email to get reset password mail.</p>
        <form action=''>
          <CustomInput
            type="text"
            className="form-control"
            id="email"
            label="Your email"
          />
          <button
            className='btn-login border-0 mt-3 px-3 py-2 text-white fw-bold w-100'
            type='submit'
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword