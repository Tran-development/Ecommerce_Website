import React from 'react'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import './Checkout.scss'
import Container from '../components/Container'

const Checkout = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <Container class1='checkout-wrapper py-5'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>Organic</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link className='text-dark' to="/cart">Cart</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Information</li>
                                        <li className="breadcrumb-item active">Shipping</li>
                                        <li className="breadcrumb-item active" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h4 className='title total'>Contact Information</h4>
                                <p className='user-details total'>Tran Quoc Tinh (huoune2312@gmail.com)</p>
                                <h4 className='mb-3'>Shipping Address</h4>
                                <form
                                    action=''
                                    className='d-flex gap-15 flex-wrap justify-content-between'
                                >
                                    <div className='w-100'>
                                        <select
                                            name=''
                                            className='form-control form-select'
                                            id=''
                                        >
                                            <option value="" selected disabled>Select Country</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' placeholder='First Name' className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' placeholder='Last Name' className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' placeholder='Address' className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' placeholder='Apartment, suite, etc' className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' placeholder='City' className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select
                                            name=''
                                            className='form-control form-select'
                                            id=''
                                        >
                                            <option value="" selected disabled>Select State</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' placeholder='Zipcode' className='form-control' />

                                    </div>
                                    <div className='w-100'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <Link to="/cart" className='text-dark d-flex align-items-center'>
                                                <FaArrowLeft className='me-2 fs-6' />
                                                Return to Cart
                                            </Link>
                                            <Link to="/cart" className='button'>
                                                Continue to Shopping
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='border-bottom py-4'>
                                <div className='d-flex gap-10 mb-2 align-items-center'>
                                    <div className='w-75 d-flex gap-10 '>
                                        <div className='w-25 position-relative'>
                                            <span style={{"top": "-5px", "right": "-5px"}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute '>0</span>
                                            <img src='images/cabbage.jpg' className='img-fluid' alt='product' />
                                        </div>
                                        <div>
                                            <h5 className='total-price'>Red Apple Envy </h5>
                                            <p className='total-price'>Sumptuous, filling, and temptingly healthy</p>
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h5 className='total'>$ 100</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-top py-2'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='total'>Subtotal</p>
                                    <p className='total-price'>$ 1000</p>
                                </div>
                            </div>
                            <div>
                                <div className='border-bottom d-flex justify-content-between align-items-center'>
                                    <p className='mb-0 total'>Shipping</p>
                                    <p className='mb-0 total-price'>$ 15</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>$ 1015</h5>
                            </div>
                        </div>
                    </div>
                </Container>
        </>
    )
}

export default Checkout