import React, { useEffect } from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link, useNavigate } from 'react-router-dom'
import './Login.scss'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/user/userSlice'


let loginSchema = yup.object().shape({
    email: yup.string().nullable().required("*Email is Required"),
    password: yup.string().required("*Password is Required"),
});

const Login = () => {

    const authState = useSelector((state) => state?.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(loginUser(values))
        },
    });

    useEffect(() => {
        if (authState?.user !== null && authState?.isError === false) {
            navigate('/')
        }
    },[authState])

    return (
        <>
            <Meta title={"Login"} />
            <BreadCrum title="Login" />
            <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-login-card'>
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action='' className='d-flex flex-column' onSubmit={formik.handleSubmit}>
                                <CustomInput
                                    type='email'
                                    className='form-control'
                                    id="email"
                                    label="Your email"
                                    name="email"
                                    val={formik.values.email}
                                    onCh={formik.handleChange("email")}
                                    onBl={formik.handleBlur("email")}

                                />
                                <div className='validate-error'>
                                    {formik.touched.email && formik.errors.email ? (
                                        <div>{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <CustomInput
                                    name=''
                                    type='password'
                                    label='Password'
                                    className='form-control'
                                    val={formik.values.password}
                                    onCh={formik.handleChange("password")}
                                    onBl={formik.handleBlur("password")}
                                />
                                <div className='validate-error'>
                                    {formik.touched.password && formik.errors.password ? (
                                        <div>{formik.errors.password}</div>
                                    ) : null}
                                </div>
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