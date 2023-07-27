import React from 'react'
import './BlogCard.scss'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='blog-card'>
      <div className='card-img'>
        <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
      </div>
      <div className='blog-content'>
        <p className='date-blog'>1 July, 2023</p>
        <h5 className='title'>Finding a way to separate ‘work’ to do a business.</h5>
        <p className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ...
        </p>
        <Link to="/blogs/:id" className="button-2">Read More</Link>
      </div>
    </div>
  )
}

export default BlogCard