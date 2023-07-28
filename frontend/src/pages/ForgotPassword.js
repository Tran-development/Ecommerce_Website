import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const ForgotPassword = () => {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <BreadCrum title="Forgot Password" />
            <Container class1='login-wrapper py-5 home-wrapper-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-login-card'>
                                <h3 className='text-center mb-3'>Reset Your Password</h3>
                                <p
                                    className='text-center mt-2 mb-3'
                                    style={{"font-size": "13px"}}
                                >We will send you an email to reset your password</p>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <input
                                            name=''
                                            type='email'
                                            placeholder='Email'
                                            className='form-control'
                                            style={{"padding": "25px"}}
                                        />
                                    </div>
                                    <div>
                                        <div className='d-flex justify-content-center flex-column gap-15 align-items-center mt-3'>
                                            <button className='button border-0' type='submit'>Submit</button>
                                        <Link 
                                            to='/login'
                                            style={{"font-size": "16px", "color": "var(--main-color)"}}
                                        >Cancle</Link>
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

export default ForgotPassword