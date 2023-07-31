import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import './Login.scss'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrum title="Login" />
            <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-login-card'>
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <CustomInput
                                    name=''
                                    type='email'
                                    placeholder='Username'
                                    className='form-control'
                                    style={{ "padding": "25px" }}
                                />
                                <CustomInput
                                    name=''
                                    type='password'
                                    placeholder='Password'
                                    className='form-control'
                                    style={{ "padding": "25px" }}
                                />
                                <div>
                                    <Link to='/forgot-password' className='link-forgot'>Forgot Password?</Link>
                                    <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                                        <button className='button border-0' type='submit'>Login</button>
                                        <Link to='/signup' className='button border-0 signup'>Signup</Link>
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

export default Login