import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOrders } from '../features/user/userSlice'

const Orders = () => {
    const dispatch = useDispatch()
    const orderState = useSelector((state) => state?.auth?.getorders?.orders)
    console.log(orderState);
    useEffect(() => {
        dispatch(getOrders())
    }, [])

    return (
        <>
            <Meta title={"My Orders"} />
            <BreadCrum title="My Orders" />
            <Container class1='cart-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-3'>
                                <h5>Order Id</h5>
                            </div>
                            <div className='col-3'>
                                <h5>Total Amount</h5>
                            </div>
                            <div className='col-3'>
                                <h5>Total Amount Atfer Discount</h5>
                            </div>
                            <div className='col-3'>
                                <h5>Status</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mt-3'>
                        {
                            orderState &&
                            orderState?.map((item, index) => {
                                return (
                                    <div style={{backgroundColor: '#7fad39'}} className='row my-3' key={index}>
                                        <div className='col-3'>
                                            <p>{item?._id}</p>
                                        </div>
                                        <div className='col-3'>
                                            <p>{item?.totalPrice}</p>
                                        </div>
                                        <div className='col-3'>
                                            <p>{item?.totalPriceAfterDiscount}</p>
                                        </div>
                                        <div className='col-3'>
                                            <p>{item?.orderStatus}</p>
                                        </div>
                                        <div className='col-12'>
                                            <div style={{backgroundColor: '#ccc'}} className='row p-3' key={index}>
                                                <div className='col-3'>
                                                    <h6>Product Name</h6>
                                                </div>
                                                <div className='col-3'>
                                                    <h6>Quantity</h6>
                                                </div>
                                                <div className='col-3'>
                                                    <h6>Price</h6>
                                                </div>
                                                <div className='col-3'>
                                                    <h6>Color</h6>
                                                </div>
                                                {
                                                item?.orderItems?.map((element, index) => {
                                                    return (
                                                        <div className='col-12'>
                                                <div style={{backgroundColor: '#ccc'}} className='row p-3' key={index}>
                                                    <div className='col-3'>
                                                        <p>{element?.product?.title}</p>
                                                    </div>
                                                    <div className='col-3'>
                                                        <p>{element?.quantity}</p>
                                                    </div>
                                                    <div className='col-3'>
                                                        <p>{element?.product?.price}</p>
                                                    </div>
                                                    <div className='col-3'>
                                                        <p className='mx-3'><ul className='colors ps-0'>
                                                        <li style={{ backgroundColor: element?.color }}></li>
                                                    </ul></p>
                                                    </div>
                                                </div>
                                            </div>
                                                    )
                                                })
                                            }
                                            </div>
                                            
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Orders