import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrum title="Reset Password" />
            <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-login-card'>
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <CustomInput
                                    name='password'
                                    type='password'
                                    placeholder='Password'
                                    className='form-control'
                                    style={{ "padding": "25px" }}
                                />
                                <CustomInput
                                    name='confpassword'
                                    type='password'
                                    placeholder='Confirm Password'
                                    className='form-control'
                                    style={{ "padding": "25px" }}
                                />
                                <div>
                                    <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                                        <button to='/login' className='button border-0 signup' type='submit'>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ResetPassword