import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { getbCategories, resetState } from '../features/bcategory/bcategorySlice';

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
    title: 'Action',
    dataIndex: 'action',
  },
];


const BlogCatList = () => {

  const [open, setOpen] = useState(false)
  const [bCateId, setBCateId] = useState("")

  const showModal = (e) => {
    setOpen(true);
    setBCateId(e)
  }

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getbCategories())
    dispatch(resetState())
  }, [])

  const bCategoryState = useSelector((state) => state.bCategory.bCategories)
  const data1 = [];
  for (let i = 0; i < bCategoryState.length; i++) {
    data1.push({
      key: i,
      title: bCategoryState[i].title,
      status: `London, Park Lane no. ${i}`,
      action: (
        <>
          <Link to={`/admin/blogcategory/${bCategoryState[i]._id}`} className='ms-3 fs-5 text-danger'>
            <BiEditAlt />
          </Link>
          <button className='ms-3 fs-5 text-danger bg-transparent border-0'
            onClick={() => showModal(bCategoryState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      )
    });
  }

  return (
    <div>
      <h3>Blog Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default BlogCatList