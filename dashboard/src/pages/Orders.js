import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEye } from 'react-icons/ai'
import { getOrders } from '../features/order/orderSlice';

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];

  
const Orders = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrders())
  }, [])

  const orderState = useSelector((state) => state.order.orders)
  // console.log(orderState.orderby.firstname);
  const data1 = [];
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i + 1,
      name: orderState[i].orderby.firstname,
      product: orderState[i].products.map((i, j) => {
        return (
            <ul key={j}>
              <li>{i.product.title}</li>
            </ul>
        )
      }),
      amount: orderState[i].paymentIntent.amount,
      date: new Date(orderState[i].createdAt).toLocaleString(),
      status: <>
      <select className='form-control form-select'>
        <option>Set Status</option>        
      </select>
    </>,
      action: (
        <>
         <Link className='ms-3 fs-5 text-danger' to="/">
            <AiFillEye />
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
            <h3>Orders</h3>
            <div>
            <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default Orders