import React, { useState } from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component"
import ReactImageZoom from 'react-image-zoom';
import './SingleProd.scss'

const SingleProd = () => {
    const props = {
        width: 400,
        height: 500,
        zoomWidth: 500,
        position: 'right',
        position: 'relative',
        img: "https://demo.casethemes.net/organio/wp-content/uploads/2021/04/h3-product2-1.png"
    };
    const [orderedProd, setOrderedProd] = useState(true)

    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrum title="Product Name" />
            <div className='main-prod-wrapper py-5 home-wrapper'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-prod-img' >
                                <div className='prod-img-item '>
                                    <ReactImageZoom {...props} style={{ "position": "absolute" }} />
                                </div>
                            </div>
                            <div className='other-prod-imgs d-flex flex-wrap gap-15'>
                                <div>
                                    <img
                                        src='images/catbanner-04.jpg'
                                        className='img-fluid'
                                        alt=''
                                    />
                                </div>
                                <div>
                                    <img
                                        src='images/catbanner-04.jpg'
                                        className='img-fluid'
                                        alt=''
                                    />
                                </div>
                                <div>
                                    <img
                                        src='images/catbanner-04.jpg'
                                        className='img-fluid'
                                        alt=''
                                    />
                                </div>
                                <div>
                                    <img
                                        src='images/catbanner-04.jpg'
                                        className='img-fluid'
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-prod-details'>
                                <div className='details'>
                                    <h3 className='title'>
                                        Fresh Orange
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
                                    <p className='price'>$12.00 – $65.00</p>
                                </div>
                                <div className='details py-3'>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='prod-heading'>ABC : </h3> <p className='prod-data'>cde</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='prod-heading'>ABC : </h3> <p className='prod-data'>cde</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='prod-heading'>ABC : </h3> <p className='prod-data'>cde</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='prod-heading'>ABC : </h3> <p className='prod-data'>cde</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='des-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Description</h4>
                            <div className='bg-white p-3'>
                                <p>
                                    Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                                    Proin vitae magna in dui finibus malesuada et at nulla.
                                    Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                                    Fusce fermentum iaculis nibh, at sodales leo maximus a.
                                    Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                                    Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt.
                                    Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='reviews-wrapper home-wrapper-2'>
                <div className='container-xxl'>
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
                                                value={3}
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
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div className='review-form'>
                                        <h5 className='mb-4 title'>Write A Review</h5>
                                        <form class="row g-3">

                                            <div class="col-12">
                                                <textarea
                                                    name=''
                                                    id=''
                                                    className='w-100 form-control'
                                                    cols="30"
                                                    rows="4"
                                                    placeholder='Write your comments here'
                                                >
                                                </textarea>
                                            </div>

                                            <div class="col-12 d-flex justify-content-end gap-10 mb-3">
                                                {/* <button class="button border-0">CANCLE</button> */}
                                                <button class="button border-0">SUBMIT</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className='reviews mt-4'>
                                    <div className='review'>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className='mb-0'>Cristiano Ronaldo</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>
                                            It’s no secret that the digital industry is booming. From exciting startups to need ghor fore global and brands, companies are reaching out.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='features-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>FEATURED PRODUCTS</h3>
                        </div>
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProd