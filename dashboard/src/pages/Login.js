import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import './Login.scss'
import logo from '../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/authSlice'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  let schema = yup.object().shape({
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email is Required"),
    password: yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: schema,
    onSubmit: values => {
      dispatch(login(values));
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const { user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (!user == null || isSuccess) {
      navigate("admin")
    } else {
      navigate("")
    }
  }, [user, isLoading, isError, isSuccess, message])

  return (
    <div className='main-content py-5'>
      <div className='admin-content-form my-5 w-25 mx-auto p-4'>
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <img src={logo} className='img-fluid' />
        </div>
        <h5 className='text-center'>Login</h5>
        <p className='text-center'>Login to your account to continue.</p>
        <div className='error text-center text-danger'>
          {message.message == "Rejected" ? "You are not an Admin" : ""}
        </div>
        <form action='' onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            className="form-control"
            id="email"
            label="Your email"
            name="email"
            val={formik.values.email}
            onCh={formik.handleChange("email")}
          />
          <div className='validate-error'>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <CustomInput
            type="password"
            className="form-control"
            id="password"
            label="Enter Password"
            name="password"
            val={formik.values.password}
            onCh={formik.handleChange("password")}
          />
          <div className='validate-error'>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className='mb-3 text-end'>
            <Link to='/forgot-password' className='text-decoration-none text-danger'>Forgot Password?</Link>
          </div>
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

export default Login