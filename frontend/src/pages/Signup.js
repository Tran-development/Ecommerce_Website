import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../features/user/userSlice'
import { useEffect } from 'react'

let signUpSchema = yup.object().shape({
  firstname: yup.string().required("*First Name is Required"),
  lastname: yup.string().required("*Last Name is Required"),
  email: yup.string().nullable().required("*Email is Required"),
  mobile: yup.string().required("*Mobile Number is Required"),
  password: yup.string().required("*Password is Required"),
});

const Signup = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const authState = useSelector((state) => state?.auth)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values))
      navigate('/login')
    },
  });

  // useEffect(() => {
  //   if (authState?.createdUser !== null && authState?.isError === false) {
  //     navigate('/login')
  //   }
  // }, [authState])
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrum title="Sign Up" />
      <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-login-card'>
              <h3 className='text-center mb-3'>Create Your Account</h3>
              <form action='' className='d-flex flex-column' onSubmit={formik.handleSubmit}>
                <CustomInput name=''
                  type='text'
                  label='First Name'
                  className='form-control'                  
                  val={formik.values.firstname}
                  onCh={formik.handleChange("firstname")}
                  onBl={formik.handleBlur("firstname")}
                />
                <div className='validate-error'>
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <div>{formik.errors.firstname}</div>
                  ) : null}
                </div>
                <CustomInput name=''
                  type='text'
                  label='Last Name'
                  className='form-control'                  
                  val={formik.values.lastname}
                  onCh={formik.handleChange("lastname")}
                  onBl={formik.handleBlur("lastname")}
                />
                <div className='validate-error'>
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <div>{formik.errors.lastname}</div>
                  ) : null}
                </div>
                <CustomInput
                  type="text"
                  className="form-control"
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
                <CustomInput name=''
                  type='phone'
                  label='Phone'
                  className='form-control'                  
                  val={formik.values.mobile}
                  onCh={formik.handleChange("mobile")}
                  onBl={formik.handleBlur("mobile")}
                />
                <div className='validate-error'>
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <div>{formik.errors.mobile}</div>
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
                  <Link to='/login' className='link-forgot'>You have an account?</Link>
                  <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                    <button to='/signup' className='button border-0 signup' type='submit'>Create</button>
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

export default Signup