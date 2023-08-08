import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { getCoupons } from '../features/coupon/couponSlice';

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    sorter: (a, b) => a.discount - b.discount,
  },
  {
    title: 'Expiry',
    dataIndex: 'expiry',
    sorter: (a, b) => a.expiry.length - b.expiry.length,
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];

const BrandList = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCoupons())
  }, [])

  const couponState = useSelector((state) => state.coupon.coupons)
  const data1 = [];
  for (let i = 0; i < couponState.length; i++) {
    data1.push({
      key: i + 1,
      name: couponState[i].name,
      discount: couponState[i].discount,
      expiry: new Date(couponState[i].expiry).toLocaleString(),
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
      <h3>Coupons</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default BrandList