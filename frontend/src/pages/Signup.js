import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrum title="Sign Up" />
      <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='auth-login-card'>
                <h3 className='text-center mb-3'>Create Your Account</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      name=''
                      type='text'
                      placeholder='First Name'
                      className='form-control'
                      style={{ "padding": "25px" }}
                    />
                  </div>
                  <div>
                    <input
                      name=''
                      type='text'
                      placeholder='Last Name'
                      className='form-control'
                      style={{ "padding": "25px" }}
                    />
                  </div>
                  <div>
                    <input
                      name=''
                      type='email'
                      placeholder='Email Address'
                      className='form-control'
                      style={{ "padding": "25px" }}
                    />
                  </div>
                  <div className='mt-1'>
                    <input
                      name=''
                      type='password'
                      placeholder='Password'
                      className='form-control'
                      style={{ "padding": "25px" }}
                    />
                  </div>
                  <div>
                    <Link to='/login' className='link-forgot'>You have an account?</Link>
                    <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                      <button to='/signup' className='button border-0 signup' type='submit'>Create</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup