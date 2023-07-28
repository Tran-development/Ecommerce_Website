import React from 'react'
import './ProductCard.scss'
import ReactStars from "react-rating-stars-component"
import { Link, useLocation } from 'react-router-dom'

const ProductCard = (props) => {
    const { grid } = props
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link to='/:id' className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                            <img className='btn-wishlist' src='images/wish.svg' alt='wishlist' />
                        </button>
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
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis ...
                        </p>
                        <p className='price'>$20.00</p>
                    </div>

                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img className='btn-product' src='images/prodcompare.svg' alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img className='btn-product' src='images/view.svg' alt='view' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img className='btn-product' src='images/add-cart.svg' alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link to='/:id' className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img className='btn-wishlist' src='images/wish.svg' alt='wishlist' />
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
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis ...
                        </p>
                        <p className='price'>$20.00</p>
                    </div>

                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img className='btn-product' src='images/prodcompare.svg' alt='compare' />
                            </Link>
                            <Link>
                                <img className='btn-product' src='images/view.svg' alt='view' />
                            </Link>
                            <Link>
                                <img className='btn-product' src='images/add-cart.svg' alt='addcart' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link to='/:id' className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img className='btn-wishlist' src='images/wish.svg' alt='wishlist' />
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
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis ...
                        </p>
                        <p className='price'>$20.00</p>
                    </div>

                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img className='btn-product' src='images/prodcompare.svg' alt='compare' />
                            </Link>
                            <Link>
                                <img className='btn-product' src='images/view.svg' alt='view' />
                            </Link>
                            <Link>
                                <img className='btn-product' src='images/add-cart.svg' alt='addcart' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link to='/:id' className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img className='btn-wishlist' src='images/wish.svg' alt='wishlist' />
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
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis ...
                        </p>
                        <p className='price'>$20.00</p>
                    </div>

                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img className='btn-product' src='images/prodcompare.svg' alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img className='btn-product' src='images/view.svg' alt='view' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img className='btn-product' src='images/add-cart.svg' alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard