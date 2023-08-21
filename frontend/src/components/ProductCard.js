import React from 'react'
import './ProductCard.scss'
import ReactStars from "react-rating-stars-component"
import { Link, useLocation } from 'react-router-dom'
import { addToWishList } from '../features/products/productSlice'
import { useDispatch } from 'react-redux'
import wishlist from '../images/wish.svg'
import {BsArrowsAngleContract} from 'react-icons/bs'
import view from '../images/view.svg'
import addcart from '../images/add-cart.svg'
import imgHidden from '../images/oninon.jpg'

const ProductCard = (props) => {
    const { grid, data } = props
    const dispatch = useDispatch()
    let location = useLocation();
    
    const handleAddToWishList = (id) => {
        console.log(id);
        dispatch(addToWishList(id))
    }
    return (
        <>
            {data?.map((item, index) => {
                return (
                    <div key={index} className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
                        <Link
                            className='product-card position-relative'
                        >
                            <div className='wishlist-icon position-absolute'>
                                <button className='border-0 bg-transparent'>
                                    <img
                                        className='btn-wishlist'
                                        src={wishlist}
                                        alt='wishlist'
                                        onClick={() => handleAddToWishList(item?._id) }
                                    />
                                </button>
                            </div>
                            <div className='product-image'>
                                <img src={item?.images[0].url} className='img-fluid' alt='Organic Cabbage' />
                                <img src={imgHidden} className='img-fluid' alt='Onion' />
                            </div>
                            <div className='product-details'>
                                <h6 className='brand'>{item?.brand}</h6>
                                <h5 className='product-title'>{item?.title}</h5>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={item?.totalrating.toString()}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}
                                    dangerouslySetInnerHTML={{ __html: item?.description }}
                                >

                                </p>
                                <p className='price'>${item?.price}</p>
                            </div>

                            <div className='action-bar position-absolute'>
                                <div className='d-flex flex-column gap-15 icon-list'>
                                    <button className='border-0 bg-transparent'>
                                        <BsArrowsAngleContract className='fs-6'/>
                                    </button>
                                    <Link to={'/product/'+item._id} className='border-0 bg-transparent'>
                                        <img className='btn-product' src={view} alt='view' />
                                    </Link>
                                    <button className='border-0 bg-transparent'>
                                        <img className='btn-product' src={addcart} alt='addcart' />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}


        </>
    )
}

export default ProductCard