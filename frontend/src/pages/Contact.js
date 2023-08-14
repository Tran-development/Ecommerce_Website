import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import './Contact.scss'
import { AiTwotoneHome } from 'react-icons/ai'
import { BsFillTelephoneInboundFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { HiInformationCircle } from "react-icons/hi"
import Container from '../components/Container'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from 'react-redux'
import { createMessage } from '../features/contact/contactSlice'

let loginSchema = yup.object().shape({
  name: yup.string().required("*Name is Required"),
  email: yup.string().nullable().required("*Email is Required"),
  mobile: yup.string().required("*Mobile Number is Required"),
  message: yup.string().required("*Message is Required"),
});

const Contact = () => {

  const dispatch = useDispatch()

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(createMessage({        
        name: values.name,
        email: values.email,
        mobile: values.mobile,
        message: values.message
      }

      ))
    },
  });

  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrum title="Contact Us" />
      <Container class1='contact-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d708.0617559147079!2d108.23747303470294!3d15.98296119968726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314211984e1c8d75%3A0xf2601bcfb6404791!2zWMaw4bufbmcgSG9hIFRyZQ!5e0!3m2!1sen!2s!4v1690356216466!5m2!1sen!2s"
              width="600"
              height="450"
              className='border-0 w-100'
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">

            </iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-wrapper d-flex justify-content-between gap-15'>
              <div>
                <h3 className='contact-title'>Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiTwotoneHome className='fs-5' />
                      <address className='mb-0'>
                        Kiet 479 Đ. Mai Đang Chon, Hoa Quy, Ngu Hanh Son, Da Nang
                      </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BsFillTelephoneInboundFill className='fs-5' />
                      <a href='tel:+84 359.682.321'>+ 84 359.682.321</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <MdEmail className='fs-5' />
                      <a href='mailto:tqtinh.19it5@vku.udn.vn'>support@vku.udn.vn</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <HiInformationCircle className='fs-5' />
                      <p className='mb-0'>Open: 8:00AM – Close: 18:00PM<br />
                        Saturday – Sunday: Close</p>
                    </li>
                  </ul>
                </div>

              </div>
              <div className='col-6'>
                <h3 className='contact-title mb-4'>LEAVE A MESSAGE</h3>
                <form className="row g-3" onSubmit={formik.handleSubmit}>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder='Your name'
                      name="name"
                      val={formik.values.email}
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                    />
                    <div className='validate-error'>
                      {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder='Your email'
                      name="email"
                      val={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                    />
                    <div className='validate-error'>
                      {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Mobile phone"
                      name="email"
                      val={formik.values.email}
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                    />
                    <div className='validate-error'>
                      {formik.touched.mobile && formik.errors.mobile ? (
                        <div>{formik.errors.mobile}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      id=''
                      className='w-100 form-control'
                      cols="30"
                      rows="4"
                      placeholder='Your message'
                      name="message"
                      val={formik.values.message}
                      onChange={formik.handleChange("message")}
                      onBlur={formik.handleBlur("message")}
                    >
                    </textarea>
                    <div className='validate-error'>
                      {formik.touched.message && formik.errors.message ? (
                        <div>{formik.errors.message}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="button border-0">SEND MESSAGE</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact