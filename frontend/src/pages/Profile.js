import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import Container from '../components/Container'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../features/user/userSlice';
import { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi'

let profileSchema = yup.object().shape({
    firstname: yup.string().required("*First Name is Required"),
    lastName: yup.string().nullable().required("*Last Name is Required"),
    email: yup.string().email().required("*Email is Required"),
    mobile: yup.string().required("*Mobile is Required"),
});

const Profile = () => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(true)

    const userState = useSelector((state) => state?.auth?.user)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: userState?.firstname,
            lastName: userState?.lastname,
            email: userState?.email,
            mobile: userState?.mobile,
        },
        validationSchema: profileSchema,
        onSubmit: (values) => {
            dispatch(updateProfile(values))
            setTimeout(() => {
                setEdit(true)
            }, 100)
        },
    });

    return (
        <>
            <Meta title={"My Profile"} />
            <BreadCrum title="My Profile" />
            <Container class1='cart-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h3 className='my-3'>Update Profile</h3>
                            <BiEditAlt className='fs-3' onClick={() => setEdit(false)} />
                        </div>
                    </div>
                    <div className='col-12'>

                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="firstname">First Name</label>
                                <input
                                    disabled={edit}
                                    type="text"
                                    className="form-control"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="First Name"
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange("firstname")}
                                    onBlur={formik.handleBlur("firstname")}
                                />
                                <div className='validate-error'>
                                    {formik.touched.firstname && formik.errors.firstname ? (
                                        <div>{formik.errors.firstname}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="lastname">Last Name</label>
                                <input
                                    disabled={edit}
                                    name='lastname'
                                    type="text"
                                    className="form-control"
                                    id="lastname"
                                    placeholder="Last Name"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange("lastName")}
                                    onBlur={formik.handleBlur("lastName")}
                                />
                                <div className='validate-error'>
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <div>{formik.errors.lastName}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email address</label>
                                <input
                                    disabled={edit}
                                    name='email'
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                />
                                <div className='validate-error'>
                                    {formik.touched.email && formik.errors.email ? (
                                        <div>{formik.errors.email}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    disabled={edit}
                                    name='mobile'
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    aria-describedby="emailHelp"
                                    placeholder="Your Phone"
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange("mobile")}
                                    onBlur={formik.handleBlur("mobile")}
                                />
                                <div className='validate-error'>
                                    {formik.touched.mobile && formik.errors.mobile ? (
                                        <div>{formik.errors.mobile}</div>
                                    ) : null}
                                </div>
                            </div>
                        </form>
                        {edit === false && <button type="submit" className="btn btn-primary">Save</button>}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Profile