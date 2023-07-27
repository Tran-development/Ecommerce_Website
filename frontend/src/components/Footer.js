import React from 'react'
import './Footer.scss'
import {
  BsSendFill,
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsGithub
} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top d-flex gap-30 align-items-center'>
                <BsSendFill className='fs-1 send-icon' />
                <div className='title-email'>
                  <h4 className='mb-1'>Join Our Newsletter Now</h4>
                  <p>Get E-mail updates about our latest shop and special offers.</p></div>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter your email"
                  aria-label="Enter your email" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h5 className='mb-4'>Contact Us</h5>
              <div>
                <address className='fs-6'>
                  Address: Kiet 479 Đ. Mai Đang Chon, Hoa Quy, Ngu Hanh Son, Da Nang <br />
                </address>
                <p>PinCode: 50000</p>
                <a
                  href='tel: +65 11.188.888'
                  className='mt-3 d-block mb-2'
                >Phone: +84 359.682.321</a>
                <span>Email: tqtinh.19it5@vku.udn.vn</span>
                <div className='social_icons d-flex align-times-center gap-15 mt-4'>
                  <a className="text-dark" href='#'>
                    <BsFacebook className='fs-4' />
                  </a>
                  <a className="text-dark" href='#'>
                    <BsInstagram className='fs-4' />
                  </a>
                  <a className="text-dark" href='#'>
                    <BsYoutube className='fs-4' />
                  </a>
                  <a className="text-dark" href='#'>
                    <BsLinkedin className='fs-4' />
                  </a>
                  <a className="text-dark" href='#'>
                    <BsGithub className='fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h5 className='mb-4'>Information</h5>
              <div className='footer-link d-flex flex-column'>
                <Link to='/privacy-policy' className='py-2 mb-1'>Privacy Policy</Link>
                <Link to='/shipping-policy' className='py-2 mb-1'>Shipping Policy</Link>
                <Link to='/refund-policy' className='py-2 mb-1'>Refund Policy</Link>
                <Link to='/term-conditions' className='py-2 mb-1'>Terms Of Service</Link>
              </div>
            </div>
            <div className='col-3'>
              <h5 className='mb-4'>Account</h5>
              <div className='footer-link d-flex flex-column'>
                <Link className='py-2 mb-1'>Search</Link>
                <Link className='py-2 mb-1'>About Us</Link>
                <Link className='py-2 mb-1'>FAQ</Link>
                <Link className='py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h5 className='mb-4'>Quick Links</h5>
              <div className='footer-link d-flex flex-column'>
                <Link className='py-2 mb-1'>Vegetables</Link>
                <Link className='py-2 mb-1'>Ocean Foods</Link>
                <Link className='py-2 mb-1'>Fresh Bananas</Link>
                <Link className='py-2 mb-1'>Papayaya & Crisps</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <p className='text-center mb-0'>
              &copy; {new Date().getFullYear()} Coded by TinhTran
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer