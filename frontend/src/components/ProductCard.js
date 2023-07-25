import React from 'react'
import './ProductCard.scss'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'

const ProductCard = () => {
    return (
        <div className='col-3'>
            <Link className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                        <img src='images/wish.svg' alt='wishlist' />
                    </Link>
                </div>
                <div className='product-image'>
                    <img src='images/cabbage.jpg' className='img-fluid' alt='Organic Cabbage' />
                    <img src='images/oninon.jpg' className='img-fluid' alt='Onion' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Organic Cabbage</h6>
                    <h5 className='product-title'>Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className='price'>$20.00</p>
                </div>

                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                            <img src='images/prodcompare.svg' alt='compare' />
                        </Link>
                        <Link>
                            <img src='images/view.svg' alt='view' />
                        </Link>
                        <Link>
                            <img src='images/add-cart.svg' alt='addcart' />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard