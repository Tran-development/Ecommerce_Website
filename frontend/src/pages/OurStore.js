import React, { useEffect, useState } from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component"
import ProductCard from "../components/ProductCard"
import Container from '../components/Container'

import './OurStore.scss'
import Color from '../components/Color'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../features/products/productSlice'

const OurStore = () => {

    const distpatch = useDispatch()
    const productState = useSelector((state) => state?.product?.product)
    const [grid, setGrid] = useState(4)
    const [brands, setBrands] = useState([])
    const [tags, setTags] = useState([])
    const [colors, setColors] = useState([])

    // filter states
    const [brand, setBrand] = useState(null)
    const [tag, setTag] = useState(null)
    const [color, setColor] = useState(null)
    const [minPrice, setMinPrice] = useState(null)
    const [maxPrice, setMaxPrice] = useState(null)
    const [sort, setSort] = useState(null)

    useEffect(() => {
        let newBrands = []
        let newColors = []
        let newTags = []
        for (let index = 0; index < productState.length; index++) {
            const element = productState[index];
            newBrands.push(element.brand)
            newColors.push(element.color)
            newTags.push(element.tags)

        }
        setBrands(newBrands)
        setTags(newTags)
        setColors(newColors)

    }, [productState])


    useEffect(() => {
        getProduct()
    }, [sort, tag, brand, color, minPrice, maxPrice])

    const getProduct = () => {
        distpatch(getProducts({
            sort, tag, brand, color, minPrice, maxPrice
        }))
    }


    return (
        <>
            <Meta title={"Our store"} />
            <BreadCrum title="OurStore" />
            <Container class1='store-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Brands</h3>
                            <ul className="list-group list-group-flush">
                                {
                                    brands && [...new Set(brands)].map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="list-group-item d-flex justify-content-between align-items-center"
                                                onClick={() => setBrand(item)}
                                            >
                                                {item}
                                                <span className="badge bg-primary rounded-pill">14</span>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>FILTER BY</h3>

                            <h5 className='sub-title'>Price</h5>
                            <div className='d-flex align-items-center gap-10'>
                                <span>$</span>
                                <div className='form-floating'>
                                    <input
                                        type='number'
                                        className='form-control'
                                        id='floatingInput'
                                        placeholder='From'
                                        onChange={(e) => setMinPrice(e.target.value)}
                                    />
                                    <label htmlFor='floatingInput'>From</label>
                                </div>
                                <span>$</span>
                                <div className='form-floating'>
                                    <input
                                        type='number'
                                        className='form-control'
                                        id='floatingInput1'
                                        placeholder='To'
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                    />
                                    <label htmlFor='floatingInput1'>To</label>
                                </div>
                            </div>

                            <h5 className='sub-title'>Colors</h5>
                            <div>
                                <ul className='colors ps-0'>

                                    {
                                        colors && [...new Set(colors)].map((item, index) => {
                                            return (
                                                <li
                                                    style={{ backgroundColor: item?.title }}
                                                    key={index}
                                                    onClick={() => setColor(item?._id)}
                                                ></li>
                                            )
                                        })
                                    }
                                </ul>
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
                                    {
                                        tags && [...new Set(tags)].map((item, index) => {
                                            return (
                                                <span
                                                    onClick={() => setTag(item)}
                                                    key={index}
                                                    className='text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3'>
                                                    {item}
                                                </span>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-9'>
                        <div className='filter-sort-grid mb-3'>
                            <div className='d-flex justify-content-between align-items-center px-4'>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0 sort-by'>Sort:</p>
                                    <select
                                        name=''
                                        defaultValue={"manula"}
                                        className='form-control form-select'
                                        id='SortBy'
                                        onChange={(e) => setSort(e.target.value)}
                                    >
                                        <option className='sort-by-element' value="price">Price: Low to high</option>
                                        <option className='sort-by-element' value="price-desc">Price: High to low</option>
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
                                <ProductCard data={productState ? productState : []} grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default OurStore