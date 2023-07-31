import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'
import './SpecialProduct.scss'

const SpecialProduct = () => {
  return (
    <div className='col-6 mb-4'>
      <div className='special-product-card'>
        <div className='d-flex justify-content-between gap-15'>
          <div>
            <img src='images/beef.jpg' className='img-fluid' alt='Onion' />
          </div>
          <div className='special-product-content'>
            <h5 className='brand'>Organic</h5>
            <h6 className='title'>
              Fresh Onion
            </h6>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className='price'>
              <b className='red-p'>$100</b> &nbsp; <strike>$150</strike>
            </p>
            <div className='discount-till d-flex align-items-center gap-10'>
              <p className='mb-0 d-flex'>
                <b>7</b> &nbsp;<span>days</span>
              </p>
              <div className='d-flex gap-10 align-items-center'>
                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                <span className='badge rounded-circle p-3 bg-danger'>1</span>
              </div>
            </div>
            <div className='prod-count my-3'>
              <p>Products: 6</p>
              <div className="progress">
                <div
                className="progress-bar"
                role="progressbar"
                style={{"width": "25%" }}
                aria-valuenow="25"                
                aria-valuemin="0" 
                aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button-1">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProduct