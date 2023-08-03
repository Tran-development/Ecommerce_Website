import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { getbCategories } from '../features/bcategory/bcategorySlice';

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

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getbCategories())
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
      <h3>Blog Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default BlogCatList