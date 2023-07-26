import React, { useState } from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component"
import ProductCard from "../components/ProductCard"

import './OurStore.scss'
import Color from '../components/Color'

const OurStore = () => {

    const [grid, setGrid] = useState(4)

    return (
        <>
            <Meta title={"Our store"} />
            <BreadCrum title="OurStore" />
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>CATEGORIES</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Butter & Eggs
                                        <span className="badge bg-primary rounded-pill">14</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Fresh Juice
                                        <span className="badge bg-primary rounded-pill">2</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Fresh Meat
                                        <span className="badge bg-primary rounded-pill">1</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Fruit
                                        <span className="badge bg-primary rounded-pill">1</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Milk & Cream
                                        <span className="badge bg-primary rounded-pill">1</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Ocean Foods
                                        <span className="badge bg-primary rounded-pill">1</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Vegetables
                                        <span className="badge bg-primary rounded-pill">1</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>FILTER BY</h3>

                                <h5 className='sub-title'>Availablity</h5>
                                <div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=""
                                            id=""
                                        />
                                        <label className='form-check-label' htmlFor="">
                                            In Stock (1)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=""
                                            id=""
                                        />
                                        <label className='form-check-label' htmlFor="">
                                            Out of Stock (0)
                                        </label>
                                    </div>
                                </div>

                                <h5 className='sub-title'>Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <span>$</span>
                                    <div className='form-floating'>
                                        <input
                                            type='email'
                                            className='form-control py-1'
                                            id='floatingInput'
                                            placeholder='From'
                                        />
                                        <label htmlFor='floatingInput'>From</label>
                                    </div>
                                    <span>$</span>
                                    <div className='form-floating'>
                                        <input
                                            type='email'
                                            className='form-control py-1'
                                            id='floatingInput1'
                                            placeholder='To'
                                        />
                                        <label htmlFor='floatingInput1'>To</label>
                                    </div>
                                </div>

                                <h5 className='sub-title'>Colors</h5>
                                <div>
                                    <Color />
                                </div>

                                <h5 className='sub-title'>Size</h5>
                                <div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=""
                                            id="color-2"
                                        />
                                        <label className='form-check-label' htmlFor="color-2">
                                            10KG
                                        </label>
                                    </div>

                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=""
                                            id="color-2"
                                        />
                                        <label className='form-check-label' htmlFor="color-2">
                                            1KG
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=""
                                            id="color-2"
                                        />
                                        <label className='form-check-label' htmlFor="color-2">
                                            2KG
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=""
                                            id="color-2"
                                        />
                                        <label className='form-check-label' htmlFor="color-2">
                                            3KG
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=""
                                            id="color-2"
                                        />
                                        <label className='form-check-label' htmlFor="color-2">
                                            5KG
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Product Tags</h3>
                                <div>
                                    <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Fresh
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Healthy
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Natural
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Organic
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Random Product</h3>
                                <div>
                                    <div className='random-products mb-3 d-flex'>
                                        <div className='w-50'>
                                            <img
                                                src='images/cabbage.jpg'
                                                className='img-fluid'
                                                alt='fruit'
                                            />
                                        </div>
                                        <div className='w-50'>
                                            <h5>
                                                Organic Lemon
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b className='price'>$20.00</b>
                                        </div>
                                    </div>
                                    <div className='random-products d-flex'>
                                        <div className='w-50'>
                                            <img
                                                src='images/oninon.jpg'
                                                className='img-fluid'
                                                alt='fruit'
                                            />
                                        </div>
                                        <div className='w-50'>
                                            <h5>
                                                Organic Lemon
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b className='price'>$20.00</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-9'>
                            <div className='filter-sort-grid mb-3'>
                                <div className='d-flex justify-content-between align-items-center px-4'>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='mb-0 sort-by'>Sort By:</p>
                                        <select
                                            name=''
                                            className='form-control form-select'
                                            id='SortBy'
                                        >
                                            <option className='sort-by-element' value="menu_order" selected="selected">Best selling</option>
                                            <option className='sort-by-element' value="popularity">Sort by popularity</option>
                                            <option className='sort-by-element' value="rating">Sort by average rating</option>
                                            <option className='sort-by-element' value="date">Sort by latest</option>
                                            <option className='sort-by-element' value="price">Sort by price: low to high</option>
                                            <option className='sort-by-element' value="price-desc">Sort by price: high to low</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <span className='totalproducts'>Showing 1–16 products</span>
                                        <div className='d-flex gap-10 align-items-center grid'>
                                            <img 
                                                onClick={() => setGrid(3)}
                                                src='images/gr4.svg'
                                                className='d-block img-fluid'
                                                alt='grid'
                                            />
                                            <img 
                                                onClick={() => setGrid(4)}
                                                src='images/gr3.svg'
                                                className='d-block img-fluid'
                                                alt='grid'
                                            />
                                            <img 
                                                onClick={() => setGrid(6)}
                                                src='images/gr2.svg'
                                                className='d-block img-fluid'
                                                alt='grid'
                                            />                                            
                                            <img 
                                                onClick={() => setGrid(12)}
                                                src='images/gr.svg'
                                                className='d-block img-fluid'
                                                alt='grid'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='product-cards d-flex'>
                                <div className='d-flex flex-wrap gap-12'>
                                <ProductCard grid={grid}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore