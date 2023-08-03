import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { getBlogs } from '../features/blog/blogSlice';

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: 'Category',
    dataIndex: 'category',
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];


const BlogList = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBlogs())
  }, [])

  const blogState = useSelector((state) => state.blog.blogs)
  const data1 = [];
  for (let i = 0; i < blogState.length; i++) {
    data1.push({
      key: i,
      title: blogState[i].title,
      category: blogState[i].category,
      description: blogState[i].description,
      status: `London, Park Lane no. ${i}`,
      action: (
        <>
          <Link className='ms-3 fs-5 text-danger' to="/">
            <BiEditAlt />
          </Link>
          <Link className='ms-3 fs-5 text-danger' to="/">
            <AiFillDelete />
          </Link>
        </>
      )
    });
  }

  return (
    <div>
      <h3>Blogs List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default BlogList