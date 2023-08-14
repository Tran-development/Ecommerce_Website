import React, { useEffect } from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import './WishList.scss'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getUserWishList } from '../features/user/userSlice'
import { addToWishList } from '../features/products/productSlice'

const WishList = () => {

    const distpatch = useDispatch()
    const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist)

    useEffect(() => {
        getWishList()
    }, [])

    const getWishList = () => {
        distpatch(getUserWishList())
    }

    const removeFromWishList = (id) => {
        distpatch(addToWishList(id))
        setTimeout(() => {
            distpatch(getUserWishList())

        }, 200)
    }

    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrum title="Wishlist" />
            <Container class1='wishlist-prod-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    {wishlistState && wishlistState.length === 0 && <div className='text-center fs-4'>Please add product to your WishList!</div>}
                    {wishlistState &&
                        wishlistState?.map((item, index) => {
                            return (
                                <div className='col-3' key={index}>
                                    <div className='wishlist-prod-card position-relative'>
                                        <img
                                            onClick={() => removeFromWishList(item?._id)}
                                            src='images/cross.svg'
                                            alt='cross'
                                            className='position-absolute cross img-fluid'
                                        />
                                        <div className='prod-card-img bg-white border border-1'>
                                            <img
                                                src={item.images[0].url ? item.images[0].url : 'images/catbanner-03.jpg'}
                                                alt='apple'
                                                width={150}
                                            />
                                        </div>
                                        <div className='wishlist-prod-details py-3 px-3'>
                                            <h5 className='title'>{item.title}</h5>
                                            <h6 className='price mt-3'>$ 18.00</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </Container>
        </>
    )
}

export default WishList