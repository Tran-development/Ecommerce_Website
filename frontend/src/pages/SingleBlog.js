import React, {useEffect} from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import './SingleBlog.scss'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getABlog } from '../features/blogs/blogSlice'

const SingleBlog = () => {

    const blogState = useSelector((state) => state?.blog?.singleBlog)
    const location = useLocation()
    const getBlogId = location.pathname.split('/')[2]
    const distpatch = useDispatch()
    useEffect(() => {
        getBlog()
    }, [])

    const getBlog = () => {
        distpatch(getABlog(getBlogId))
    }

    return (
        <>
            <Meta title={blogState?.title} />
            <BreadCrum title={blogState?.title} />
            <Container class1='blog-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>
                            <Link to='/blogs' className='d-flex align-items-center gap-15'>
                                <FaArrowLeft />
                                Go back to Blogs
                            </Link>
                            <img
                                src={blogState?.images[0].url ? blogState?.images[0].url : '/images/blog-2.jpg'}
                                className='img-fluid w-100 my-4'
                                alt='fruit'
                            />
                            <h3 className='title'>{blogState?.title}</h3>
                            <p
                                // dangerouslySetInnerHTML={{ __html: description }}
                            ></p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleBlog