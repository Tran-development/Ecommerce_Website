import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'
import './SpecialProduct.scss'
import { useDispatch, useSelector } from 'react-redux'
import { updateRemainingTime } from '../features/countdown/countdownSlice';
import { startCountdown } from '../features/countdown/countdownService';
import { useEffect } from 'react'


const SpecialProduct = (props) => {

  const remainingTime = useSelector((state) => state.countdown.remainingTime)

  const dispatch = useDispatch()

  useEffect(() => {
    const targetDate = new Date('2023-08-30T23:59:59')

    const callback = remainingTime => {
      dispatch(updateRemainingTime(remainingTime))
    }

    startCountdown(targetDate, callback)
  }, [dispatch])

  const {
    title,
    id,
    brand,
    price,
    sold,
    totalrating,
    quantity, } = props

  return (
    <div className='col-6 mb-4'>
      <div className='special-product-card'>
        <div className='d-flex justify-content-between gap-15'>
          <div>
            <img src='images/beef.jpg' className='img-fluid' alt='Onion' />
          </div>
          <div className='special-product-content'>
            <h5 className='brand'>{brand}</h5>
            <h6 className='title'>
              {title}
            </h6>
            <ReactStars
              count={5}
              size={24}
              value={totalrating}
              edit={false}
              activeColor="#ffd700"
            />
            <p className='price'>
              <b className='red-p'>$ {price}</b> &nbsp; <strike>$150</strike>
            </p>
            <div className='discount-till d-flex align-items-center gap-10'>
              <p className='mb-0 d-flex'>
                <b>{remainingTime.days}</b> &nbsp;<span>days</span>
              </p>
              <div className='d-flex gap-10 align-items-center'>
                <span className='badge rounded-circle p-3 bg-danger'>{remainingTime.hours}</span>:
                <span className='badge rounded-circle p-3 bg-danger'>{remainingTime.minutes}</span>:
                <span className='badge rounded-circle p-3 bg-danger'>{remainingTime.seconds}</span>
              </div>
            </div>
            <div className='prod-count my-3'>
              <p>Products: {quantity}</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: quantity / quantity + sold * 100 + "%" }}
                  aria-valuenow={quantity / quantity + sold * 100}
                  aria-valuemin={quantity}
                  aria-valuemax={sold + quantity}
                ></div>
              </div>
            </div>
            <Link className="button-1" to={'/product/'+id}>View</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProduct