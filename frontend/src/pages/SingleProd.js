import React, { useState } from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component"
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'
import './SingleProd.scss'
import { BsArrowsAngleContract, BsFillHeartFill } from 'react-icons/bs'
import Container from '../components/Container'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addRating, getAProduct, getProducts } from '../features/products/productSlice'
import { toast } from 'react-toastify'
import { addCartToProduct, getUserCart } from '../features/user/userSlice'

const SingleProd = () => {

    const [color, setColor] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [alreadyAdded, setAlreadyAdded] = useState(false)
    const [orderedProd, setOrderedProd] = useState(true)
    const [popularProd, setPopularProd] = useState([])

    const location = useLocation()
    const navigate = useNavigate()
    const productId = location.pathname.split('/')[2]
    const dispatch = useDispatch()
    const productState = useSelector((state) => state?.product?.singleProduct)
    const productsState = useSelector((state) => state?.product?.product)
    const cartState = useSelector((state) => state?.auth?.cartProducts)

    useEffect(() => {
        dispatch(getAProduct(productId))
        dispatch(getUserCart())
        dispatch(getProducts())
    }, [])

    useEffect(() => {
        for (let index = 0; index < cartState?.length; index++) {
            if (productId === cartState[index]?.productId?._id) {
                setAlreadyAdded(true)
            }

        }
    }, [cartState])

    const config2 = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };
    
    const uploadToCart = () => {
        if (color === null) {
            toast.error("Please choose color")
            return false
        } else {
            dispatch(addCartToProduct({
                productId: productState?._id,
                quantity,
                color,
                price: productState?.price
            }), config2)
            navigate('/cart')
        }
    }

    useEffect(() => {
        dispatch(getAProduct(productId))
    }, [])

    const props = {
        width: 400,
        height: 500,
        zoomWidth: 500,
        position: 'right',
        position: 'relative',
        img: productState?.images[0]?.url ? productState?.images[0]?.url : 'Updating ...'
    };

    const copyToClipboard = (text) => {
        alert('Coppied', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    useEffect(() => {
        let data = []
        for (let index = 0; index < productsState.length; index++) {
            const element = productsState[index];
            if (element.tags === 'popular') {
                data.push(element)
            }

            setPopularProd(data)
        }
    }, [productsState])


    const [star, setStar] = useState(null)
    const [comment, setComment] = useState(null)

    const addRatingToProduct = () => {
        if (star === null) {
            toast.error("Please add star rating")
            return false
        } else if (comment === null) {
            toast.error("Please Write Review About the Product!")
            return false
        } else {
            dispatch(addRating({ star: star, prodId: productId, comment: comment }))
            
        }
        return false
    }

    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrum title={productState?.title} />
            <Container class1='main-prod-wrapper py-5 home-wrapper'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-prod-img' >
                            <div className='prod-img-item '>
                                <ReactImageZoom {...props} style={{ "position": "absolute" }} />
                            </div>
                        </div>
                        <div className='other-prod-imgs d-flex flex-wrap gap-15'>
                            {productState?.images.map((item, index) => {
                                return (
                                    <div>
                                        <img
                                            src={item?.url}
                                            className='img-fluid'
                                            alt=''
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-prod-details'>
                            <div className='details'>
                                <h3 className='title'>
                                    {productState?.title}
                                </h3>
                            </div>
                            <div className='details'>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 t-review'>(2 Reviews)</p>
                                </div>
                                <a href='#review' className='mb-3 review-btn'>Write a Review</a>
                                <p className='price'>$ {productState?.price}</p>
                            </div>
                            <div className='details py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='prod-heading'>Type : </h3> <p className='prod-data'>Fresh Fruits</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='prod-heading'>Brand : </h3> <p className='prod-data'>{productState?.brand}</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='prod-heading'>Category : </h3> <p className='prod-data'>{productState?.category}</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='prod-heading'>Tags : </h3> <p className='prod-data'>{productState?.tags}</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='prod-heading'>Availablity : </h3> <p className='prod-data'>In Stock</p>
                                </div>
                                <div className='d-flex gap-10 flex-column my-2'>
                                    <h3 className='prod-heading'>Weight : </h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>0.5 KG</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>1 KG</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>2 KG</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>5 KG</span>
                                    </div>
                                </div>
                                {
                                    alreadyAdded === false && <>
                                        <div className='d-flex gap-10 flex-column mt-2 mb-2'>
                                            <h3 className='prod-heading'>Color : </h3>
                                            <div>
                                                <Color setColor={setColor} colorData={productState?.color} />
                                            </div>
                                        </div>
                                    </>
                                }
                                <div className='d-flex gap-10 align-items-center flex-row mt-2 mb-3'>
                                    {
                                        alreadyAdded === false && <>
                                            <h3 className='prod-heading'>Quantity : </h3>
                                            <div className='d-flex gap'>
                                                <input
                                                    type='number'
                                                    name=''
                                                    min={1}
                                                    max={50}
                                                    className='form-control'
                                                    style={{ width: "70px" }}
                                                    id=''
                                                    onChange={(e) => setQuantity(e.target.value)}
                                                    value={quantity}
                                                />
                                            </div>
                                        </>
                                    }
                                    <div className='d-flex gap-15 align-items-center'>
                                        <button
                                            className='button border-0'
                                            type='submit'
                                            // data-bs-toggle="modal"
                                            // data-bs-target="#staticBackdrop"
                                            onClick={() => { alreadyAdded ? navigate('/cart') : uploadToCart() }}
                                        >{alreadyAdded ? "Go To Cart" : "Add to Cart"}</button>
                                        {/* <button className='button border-0 signup'>Buy It Now</button> */}
                                    </div>
                                </div>
                                <div className='d-flex gap-15 align-times-center'>
                                    <div className=''>
                                        <a href=''><BsArrowsAngleContract className='fs-5 me-2' />Compare</a>
                                    </div>
                                    <div className=''>
                                        <a href=''><BsFillHeartFill className='fs-5 me-2' />Add to wishlist</a>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h3 className='prod-heading'>Shipping & Return : </h3>
                                    <p className='prod-data'>
                                        Free shipping and returns available on all orders! <br />
                                        We ship all Viet Nam domestic orders within <br />
                                        <b>1-3 business days!</b>
                                    </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='prod-heading'>Copy Product Link : </h3>
                                    <a
                                        href='javascript:void(0);'
                                        onClick={() => {
                                            copyToClipboard(window.location.href)
                                        }}
                                    >
                                        Copy Product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='des-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p
                                className='text-dark'
                                dangerouslySetInnerHTML={{ __html: productState?.description }}
                            >
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1='reviews-wrapper home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 id='review'>Reviews</h3>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={productId?.totalrating}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {orderedProd && (
                                    <div>
                                        <a className='text-dark text-decoration-underline'>
                                            Write a Review
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className='col-12 d-flex flex-column mt-3'>
                                <div className='comments-note'>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                </div>
                                <div className='rating mb-3'>
                                    <p>Your rating *</p>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        edit={true}
                                        onChange={(e) => setStar(e)}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <div className='review-form'>
                                    <h5 className='mb-4 title'>Write A Review</h5>
                                    <div className="col-12">
                                        <textarea
                                            name=''
                                            id=''
                                            className='w-100 form-control'
                                            cols="30"
                                            rows="4"
                                            placeholder='Write your comments here'
                                            onChange={(e) => setComment(e.target.value)}
                                        >
                                        </textarea>
                                    </div>

                                    <div className="col-12 d-flex justify-content-end gap-10 mb-3">
                                        {/* <button className="button border-0">CANCLE</button> */}
                                        <button
                                            onClick={addRatingToProduct}
                                            className="button border-0 mt-3"
                                            type='button'>
                                            SUBMIT
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className='reviews mt-4'>

                                {
                                    productState && productState?.ratings?.map((item, index) => {
                                        return (
                                            <div key={index} className='review'>
                                                <div className='d-flex gap-10 align-items-center'>
                                                    <h6 className='mb-0'>{item?.postedby.slice(20)}</h6>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value={item?.star}
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                </div>
                                                <p className='mt-3'>
                                                    {item?.comment}
                                                </p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </Container>
            <Container class1='features-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>FEATURED PRODUCTS</h3>
                    </div>
                    <ProductCard data={popularProd} />
                </div>
            </Container>
        </>
    )
}

export default SingleProd