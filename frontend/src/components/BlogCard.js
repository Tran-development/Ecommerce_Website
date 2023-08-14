import React from 'react'
import './BlogCard.scss'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {

  const {id, title, description, date, image } = props

  return (
    <div className='blog-card'>
      <div className='card-img'>
        <img src={image ? image : 'images/blog-1.jpg'} className='img-fluid w-100' alt='blog' />
      </div>
      <div className='blog-content'>
        <p className='date-blog'>{date}</p>
        <h5 className='title'>{title}</h5>
        <p className='desc'
          dangerouslySetInnerHTML={{ __html: description?.substr(0, 40) + ' ...' }}
        >
        </p>
        <Link to={"/blog/" + id} className="button-2">Read More</Link>
      </div>
    </div>
  )
}

export default BlogCard