import React, { useState, useEffect } from 'react'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import './Checkout.scss'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from "yup";
import { useFormik } from "formik";
import axios from 'axios'
import { config } from "../utils/axiosConfig";
import { createAnOrder, getOrders, resetState } from '../features/user/userSlice'


let shippingSchema = yup.object().shape({
    firstName: yup.string().required("*First Name is Required"),
    lastName: yup.string().nullable().required("*Last Name is Required"),
    address: yup.string().required("*Address is Required"),
    state: yup.string().required("*State is Required"),
    other: yup.string().required("*Other is Required"),
    city: yup.string().required("*City is Required"),
    country: yup.string().required("*Country is Required"),
    pincode: yup.string().required("*Pincode is Required"),
});

const Checkout = () => {
    const [totalAmount, setTotalAmount] = useState(null)
    const [shippingInfor, setShippingInfor] = useState(null)
    const [paymentInfor, setPaymentInfor] = useState({
        razorpayPaymentId: "",
        razorpayOrderId: ""
    })
    const [cartProductState, setCartProductState] = useState([])

    const dispatch = useDispatch()
    const cartState = useSelector((state) => state?.auth?.cartProducts)
    // const resetAuthState = useSelector((state) => state?.auth?.orderedProduct)

    // useEffect(() => {
    //     if (resetAuthState?.success === true) {
    //         setTotalAmount('')
    //         setShippingInfor('')
    //         setPaymentInfor('')
    //         setCartProductState('')
    //         dispatch(resetState())
    //         dispatch(getOrders(''))
    //         console.log('Reset form');
    //     }
    // }, [resetAuthState])

    useEffect(() => {
        let sum = 0;
        for (let index = 0; index < cartState?.length; index++) {
            sum = sum + (Number(cartState[index].quantity) * cartState[index].productId.price)
            setTotalAmount(sum)
        }
    }, [cartState])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstName: "",
            lastName: "",
            address: "",
            state: "",
            city: "",
            country: "",
            pincode: "",
            other: ""
        },
        validationSchema: shippingSchema,
        onSubmit: (values) => {
            setShippingInfor(values)
            setTimeout(() => {
                checkOutHandler()
            }, 300)
        },
    });

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script")
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    useEffect(() => {
        let items = []
        for (let index = 0; index < cartState?.length; index++) {
            items.push({
                product: cartState[index]?.productId?._id,
                quantity: cartState[index]?.quantity,
                color: cartState[index]?.color?._id,
                price: cartState[index]?.price,
            })

        }
        setCartProductState(items)
    }, [])

    const checkOutHandler = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        if (!res) {
            alert("Razorpay SDK failed to Load")
            return
        }
        const result = await axios.post(
            "http://localhost:5000/api/user/order/checkout",
            { amount: totalAmount + 5 }, config
        )
        if (!result) {
            alert("Something Went Wrong")
            return
        }

        const { amount, id: order_id, currency } = result.data.order
        console.log(result);
        const options = {
            key: "rzp_test_tvuysLBFyZba69", // Enter the Key ID generated from the Dashboard
            amount: amount,
            currency: currency,
            name: "Tran Quoc Tinh",
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                };
                const result = await axios.post(
                    "http://localhost:5000/api/user/order/paymentverification",
                    data, config
                );
                setPaymentInfor({
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                })
                dispatch(createAnOrder({
                    totalPrice: totalAmount,
                    totalPriceAfterDiscount: totalAmount,
                    orderItems: cartProductState,
                    paymentInfor,
                    shippingInfor
                }))
            },
            prefill: {
                name: "Tinh Tran",
                email: "example@upi",
                contact: "0987654321",
            },
            notes: {
                address: "TMA solutions Binh Dinh",
            },
            theme: {
                color: "#61dafb",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <>
            <Meta title={"Cart"} />
            <Container class1='checkout-wrapper py-5'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='checkout-left-data'>
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
                                onSubmit={formik.handleSubmit}
                                action=''
                                className='d-flex gap-15 flex-wrap justify-content-between'
                            >
                                <div className='w-100'>
                                    <select
                                        name='country'
                                        className='form-control form-select'
                                        id=''
                                        val={formik.values.country}
                                        onChange={formik.handleChange("country")}
                                        onBlur={formik.handleBlur("country")}
                                    >
                                        <option value="" selected disabled>Select Country</option>
                                        <option value="vietnam">Viet Nam</option>
                                    </select>
                                    <div className='validate-error'>
                                        {formik.touched.country && formik.errors.country ? (
                                            <div>{formik.errors.country}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type='text'
                                        name='firstName'
                                        placeholder='First Name'
                                        className='form-control'
                                        val={formik.values.firstName}
                                        onChange={formik.handleChange("firstName")}
                                        onBlur={formik.handleBlur("firstName")}
                                    />
                                    <div className='validate-error'>
                                        {formik.touched.firstName && formik.errors.firstName ? (
                                            <div>{formik.errors.firstName}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type='text'
                                        placeholder='Last Name'
                                        className='form-control'
                                        name='lastName'
                                        val={formik.values.lastName}
                                        onChange={formik.handleChange("lastName")}
                                        onBlur={formik.handleBlur("lastName")}
                                    />
                                    <div className='validate-error'>
                                        {formik.touched.lastName && formik.errors.lastName ? (
                                            <div>{formik.errors.lastName}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <input
                                        type='text'
                                        placeholder='Address'
                                        className='form-control'
                                        name='address'
                                        val={formik.values.address}
                                        onChange={formik.handleChange("address")}
                                        onBlur={formik.handleBlur("address")}
                                    />
                                    <div className='validate-error'>
                                        {formik.touched.address && formik.errors.address ? (
                                            <div>{formik.errors.address}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <input
                                        type='text'
                                        placeholder='Apartment, suite, etc'
                                        className='form-control'
                                        name='other'
                                        val={formik.values.other}
                                        onChange={formik.handleChange("other")}
                                        onBlur={formik.handleBlur("other")}
                                    />
                                    <div className='validate-error'>
                                        {formik.touched.other && formik.errors.other ? (
                                            <div>{formik.errors.other}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type='text'
                                        placeholder='City'
                                        className='form-control'
                                        name='city'
                                        val={formik.values.city}
                                        onChange={formik.handleChange("city")}
                                        onBlur={formik.handleBlur("city")}
                                    />
                                    <div className='validate-error'>
                                        {formik.touched.city && formik.errors.city ? (
                                            <div>{formik.errors.city}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <select
                                        name='state'
                                        className='form-control form-select'
                                        id=''
                                        val={formik.values.state}
                                        onChange={formik.handleChange("state")}
                                        onBlur={formik.handleBlur("state")}
                                    >
                                        <option value="" selected disabled>Select State</option>
                                        <option value="nguhanhson">Ngu Hanh Son</option>
                                        <option value="lienchieu">Lien Chieu</option>
                                        <option value="hoakhanh">Hoa Khanh</option>
                                        <option value="sontra">Son Tra</option>
                                    </select>
                                    <div className='validate-error'>
                                        {formik.touched.state && formik.errors.state ? (
                                            <div>{formik.errors.state}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type='text'
                                        placeholder='Zipcode'
                                        className='form-control'
                                        name='pincode'
                                        val={formik.values.pincode}
                                        onChange={formik.handleChange("pincode")}
                                        onBlur={formik.handleBlur("pincode")}
                                    />
                                    <div className='validate-error'>
                                        {formik.touched.pincode && formik.errors.pincode ? (
                                            <div>{formik.errors.pincode}</div>
                                        ) : null}
                                    </div>

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
                                        <button
                                            className='button'
                                            type='submit'
                                        >Place Order</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='border-bottom py-4'>
                            {
                                cartState && cartState?.map((item, index) => {
                                    return (
                                        <div key={index} className='d-flex gap-10 mb-2 align-items-center'>
                                            <div className='w-75 d-flex gap-10'>
                                                <div className='w-25 position-relative'>
                                                    <span style={{ "top": "-5px", "right": "-5px" }}
                                                        className='badge bg-secondary text-white rounded-circle p-2 position-absolute '>
                                                        {item?.quantity}
                                                    </span>
                                                    <img width={100} height={100} src={item?.productId?.images[0]?.url} className='img-fluid' alt='product' />
                                                </div>
                                                <div>
                                                    <h5 className='total-price'>{item?.productId?.title}</h5>
                                                    <p className='total-price'>{item?.color?.title}</p>
                                                </div>
                                            </div>
                                            <div className='flex-grow-1 price'>
                                                <h5 className='total'>$ {item?.productId?.price * item?.quantity}</h5>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='border-top py-2'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>$ {totalAmount && totalAmount?.toFixed(1) ? totalAmount?.toFixed(1) : '0'}</p>
                            </div>
                        </div>
                        <div>
                            <div className='border-bottom d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>$ 5</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>$ {totalAmount && totalAmount?.toFixed(1) ? (totalAmount + 5)?.toFixed(1) : '0'}</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Checkout