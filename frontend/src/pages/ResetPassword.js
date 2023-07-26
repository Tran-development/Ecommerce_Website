import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrum title="Reset Password" />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-login-card'>
                                <h3 className='text-center mb-3'>Reset Password</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <input
                                            name='password'
                                            type='password'
                                            placeholder='Password'
                                            className='form-control'
                                            style={{ "padding": "25px" }}
                                        />
                                    </div>
                                    <div className='mt-1'>
                                        <input
                                            name='confpassword'
                                            type='password'
                                            placeholder='Confirm Password'
                                            className='form-control'
                                            style={{ "padding": "25px" }}
                                        />
                                    </div>
                                    <div>
                                        <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                                            <button to='/login' className='button border-0 signup' type='submit'>Submit</button>
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

export default ResetPassword