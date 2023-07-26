import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import './Contact.scss'
import { AiTwotoneHome } from 'react-icons/ai'
import { BsFillTelephoneInboundFill } from "react-icons/bs"
import { MdEmail} from "react-icons/md"
import { HiInformationCircle} from "react-icons/hi"

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrum title="Contact Us" />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
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
                        <AiTwotoneHome className='fs-5'/>
                        <address className='mb-0'>
                        Kiet 479 Đ. Mai Đang Chon, Hoa Quy, Ngu Hanh Son, Da Nang
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BsFillTelephoneInboundFill className='fs-5'/>
                        <a href='tel:+84 359.682.321'>+ 84 359.682.321</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <MdEmail className='fs-5'/>
                        <a href='mailto:tqtinh.19it5@vku.udn.vn'>support@vku.udn.vn</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <HiInformationCircle className='fs-5'/>
                        <p className='mb-0'>Open: 8:00AM – Close: 18:00PM<br />
                        Saturday – Sunday: Close</p>
                      </li>
                    </ul>
                  </div>

                </div>
                <div className='col-6'>
                  <h3 className='contact-title mb-4'>LEAVE A MESSAGE</h3>
                  <form class="row g-3">
                    <div class="col-md-6">
                      <input type="text" class="form-control" id="name" placeholder='Your name' />
                    </div>
                    <div class="col-md-6">
                      <input type="email" class="form-control" id="Email" placeholder='Your email' />
                    </div>
                    <div class="col-12">
                      <input type="text" class="form-control" id="phone" placeholder="Mobile phone" />
                    </div>
                    <div class="col-12">
                      <textarea
                        name=''
                        id=''
                        className='w-100 form-control'
                        cols="30"
                        rows="4"
                        placeholder='Your message'
                      >

                      </textarea>
                    </div>

                    <div class="col-12">
                      <button class="button border-0">SEND MESSAGE</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact