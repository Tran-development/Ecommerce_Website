import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link, useLocation } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux'
import { resetPasswordToken } from '../features/user/userSlice'

let resetSchema = yup.object().shape({
    password: yup.string().required("*Password is Required"),
});

const ResetPassword = () => {

    const location = useLocation()
    const getToken = location.pathname.split('/')[2]

    console.log(getToken);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            password: "",
        },
        validationSchema: resetSchema,
        onSubmit: (values) => {
            dispatch(resetPasswordToken({token: getToken, password: values.password}))

            navigate('/login')
        },
    });
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrum title="Reset Password" />
            <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-login-card'>
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form action='' className='d-flex flex-column gap-15' onSubmit={formik.handleSubmit}>
                                <CustomInput
                                    type='password'
                                    label='Password'
                                    className='form-control'
                                    style={{ "padding": "25px" }}
                                    name="password"
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