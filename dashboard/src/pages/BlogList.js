import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { getBlogs, resetState, deleteABlog } from '../features/blog/blogSlice';
import CustomModal from '../components/CustomModal';

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

  const [open, setOpen] = useState(false)
  const [blogId, setBlogId] = useState("")

  const showModal = (e) => {
    setOpen(true);
    setBlogId(e)
  }

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBlogs())
    dispatch(resetState())
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
          <Link to={`/admin/blog/${blogState[i]._id}`} className='ms-3 fs-5 text-danger'>
            <BiEditAlt />
          </Link>
          <button className='ms-3 fs-5 text-danger bg-transparent border-0'
            onClick={() => showModal(blogState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      )
    });
  }
  const deleteBlog = (e) => {
    dispatch(deleteABlog(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getBlogs());
    }, 100);
  };
  return (
    <div>
      <h3>Blogs List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {deleteBlog(blogId)}}
        title="Are you sure you want to delete this Blog?"
      />
    </div>
  )
}

export default BlogList