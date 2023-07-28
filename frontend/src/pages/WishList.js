import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import './WishList.scss'
import Container from '../components/Container'

const WishList = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrum title="Wishlist" />
            <Container class1='wishlist-prod-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='wishlist-prod-card position-relative'>
                            <img
                                src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'
                            />
                            <div className='prod-card-img'>
                                <img src='images/catbanner-03.jpg' alt='apple' />
                            </div>
                            <div className='wishlist-prod-details py-3 px-3'>
                                <h5 className='title'>Red Apple Envy</h5>
                                <h6 className='price mt-3'>$ 18.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-prod-card position-relative'>
                            <img
                                src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'
                            />
                            <div className='prod-card-img'>
                                <img src='images/catbanner-03.jpg' alt='apple' />
                            </div>
                            <div className='wishlist-prod-details py-3 px-3'>
                                <h5 className='title'>Red Apple Envy</h5>
                                <h6 className='price mt-3'>$ 18.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-prod-card position-relative'>
                            <img
                                src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'
                            />
                            <div className='prod-card-img'>
                                <img src='images/catbanner-03.jpg' alt='apple' />
                            </div>
                            <div className='wishlist-prod-details py-3 px-3'>
                                <h5 className='title'>Red Apple Envy</h5>
                                <h6 className='price mt-3'>$ 18.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-prod-card position-relative'>
                            <img
                                src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'
                            />
                            <div className='prod-card-img'>
                                <img src='images/catbanner-03.jpg' alt='apple' />
                            </div>
                            <div className='wishlist-prod-details py-3 px-3'>
                                <h5 className='title'>Red Apple Envy</h5>
                                <h6 className='price mt-3'>$ 18.00</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default WishList