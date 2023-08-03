import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { getBrands } from '../features/brand/brandSlice';

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

const BrandList = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBrands())
  }, [])

  const brandState = useSelector((state) => state.brand.brands)
  const data1 = [];
  for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i + 1,
      title: brandState[i].title,
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
      <h3>Brands</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default BrandList