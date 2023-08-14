import React, { useEffect } from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import BlogCard from '../components/BlogCard'
import './Blog.scss'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../features/blogs/blogSlice'
import moment from 'moment'

const Blog = () => {

  const blogState = useSelector((state) => state?.blog?.blog)

  const distpatch = useDispatch()
  useEffect(() => {
    getAllBlogs()
  }, [])

  const getAllBlogs = () => {
    distpatch(getBlogs())
  }

  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrum title="Blogs" />
      <Container class1='blog-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>FIND BY CATEGORIES</h3>
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
              <h3 className='filter-title'>Recent News</h3>
              <div>
                <div className='random-products mb-3 d-flex'>
                  <div className='w-50'>
                    <img
                      src='images/blog-2.jpg'
                      className='img-fluid'
                      alt='fruit'
                    />
                  </div>
                  <div className='w-50'>
                    <h5>
                      Our 6 of the Best Organic Chocolates to Buy.
                    </h5>

                    <b className='date'>Jul 26, 2023</b>
                  </div>
                </div>
                <div className='random-products d-flex'>
                  <div className='w-50'>
                    <img
                      src='images/blog-3.jpg'
                      className='img-fluid'
                      alt='fruit'
                    />
                  </div>
                  <div className='w-50'>
                    <h5>
                      Best guide to shopping for organic ingredients.
                    </h5>

                    <b className='date'>Jul 26, 2023</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-9'>
            <div className='row'>
              { blogState &&
                blogState?.map((item, index) => {
                  return (
                    <div className='col-6 mb-3' key={index}>
                      <BlogCard
                        id={item?._id}
                        title={item?.title}
                        description={item?.description}
                        image={item?.images[0]?.url}
                        data={blogState ? blogState : []}
                        date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}
                      />
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blog