import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import './SingleBlog.scss'
import Container from '../components/Container'

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Single Blog"} />
            <BreadCrum title="Single Blog" />
            <Container class1='blog-wrapper home-wrapper-2 py-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='single-blog-card'>
                                <Link to='/blogs' className='d-flex align-items-center gap-15'>
                                    <FaArrowLeft />
                                    Go back to Blogs
                                </Link>
                                <img
                                    src='/images/blog-2.jpg'
                                    className='img-fluid w-100 my-4'
                                    alt='fruit'
                                />
                                <h3 className='title'>Our 6 of the Best Organic Chocolates to Buy.</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum The man, who is in a stable condition inhospital,
                                    has “potentially life-changing injuries” after the overnight attack in Garvagh, County Lonodonderry. He was shot in the arms and legs.”
                                    What sort of men would think.” A reader will be distracted by the readable content.</p>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default SingleBlog