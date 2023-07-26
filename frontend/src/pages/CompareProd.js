import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import Color from '../components/Color'
import './CompareProd.scss'

const CompareProd = () => {
    return (
        <>
            <Meta title={"Compare Products"} />
            <BreadCrum title="Compare Products" />
            <div className='compare-prod-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='compare-prod-card position-relative'>
                                <img 
                                    src='images/cross.svg'
                                    alt='cross'
                                    className='position-absolute cross img-fluid'
                                />
                                <div className='prod-card-img'>
                                    <img src='images/catbanner-03.jpg' alt='apple'/>
                                </div>
                                <div className='compare-prod-details py-3 px-3'>
                                    <h5 className='title'>Red Apple Envy</h5>
                                    <h6 className='price mt-3'>$ 18.00</h6>

                                    <div>
                                        <div className='prod-detail'>
                                            <h5>Brand:</h5>
                                            <p>Organic</p>
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Type:</h5>
                                            <p>Fruit</p>
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>M</p>
                                                <p>S</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-prod-card position-relative'>
                                <img 
                                    src='images/cross.svg'
                                    alt='cross'
                                    className='position-absolute cross img-fluid'
                                />
                                <div className='prod-card-img'>
                                    <img src='images/catbanner-03.jpg' alt='apple'/>
                                </div>
                                <div className='compare-prod-details py-3 px-3'>
                                    <h5 className='title'>Red Apple Envy</h5>
                                    <h6 className='price mt-3'>$ 18.00</h6>

                                    <div>
                                        <div className='prod-detail'>
                                            <h5>Brand:</h5>
                                            <p>Organic</p>
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Type:</h5>
                                            <p>Fruit</p>
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>M</p>
                                                <p>S</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-prod-card position-relative'>
                                <img 
                                    src='images/cross.svg'
                                    alt='cross'
                                    className='position-absolute cross img-fluid'
                                />
                                <div className='prod-card-img'>
                                    <img src='images/catbanner-03.jpg' alt='apple'/>
                                </div>
                                <div className='compare-prod-details py-3 px-3'>
                                    <h5 className='title'>Red Apple Envy</h5>
                                    <h6 className='price mt-3'>$ 18.00</h6>

                                    <div>
                                        <div className='prod-detail'>
                                            <h5>Brand:</h5>
                                            <p>Organic</p>
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Type:</h5>
                                            <p>Fruit</p>
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>M</p>
                                                <p>S</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-prod-card position-relative'>
                                <img 
                                    src='images/cross.svg'
                                    alt='cross'
                                    className='position-absolute cross img-fluid'
                                />
                                <div className='prod-card-img'>
                                    <img src='images/catbanner-03.jpg' alt='apple'/>
                                </div>
                                <div className='compare-prod-details py-3 px-3'>
                                    <h5 className='title'>Red Apple Envy</h5>
                                    <h6 className='price mt-3'>$ 18.00</h6>

                                    <div>
                                        <div className='prod-detail'>
                                            <h5>Brand:</h5>
                                            <p>Organic</p>
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Type:</h5>
                                            <p>Fruit</p>
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className='prod-detail'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>M</p>
                                                <p>S</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProd