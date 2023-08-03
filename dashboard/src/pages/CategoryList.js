import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { getCategories } from '../features/category/categorySlice';

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
  
const CategoryList = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const categoryState = useSelector((state) => state.category.categories)
  const data1 = [];
  for (let i = 0; i < categoryState.length ; i++) {
    data1.push({
      key: i + 1,
      title: categoryState[i].title,
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
            <h3>Product Categories</h3>
            <div>
            <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default CategoryList