import React, { useState, useEffect } from 'react'
import { BsArrowDownRight } from 'react-icons/bs'
import './DashBoard.scss'
import { Area } from '@ant-design/plots';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthlyData, getOrders, getYearlyData } from '../features/order/orderSlice';

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
    title: 'Product Count',
    dataIndex: 'product',
  },
  {
    title: 'Total Price',
    dataIndex: 'price',
  },
  {
    title: 'Total Price After Discount',
    dataIndex: 'dprice',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `Pending. ${i}`,
  });
}

const DashBoard = () => {

  const [dataMonthly, setDataMonthly] = useState([])
  const [orderData, setOrderData] = useState([])

  const dispatch = useDispatch()
  const monthlyDataState = useSelector((state) => state?.order?.monthlydata)
  const yearlyDataState = useSelector((state) => state?.order?.yearlydata)
  const ordersState = useSelector((state) => state?.order?.orders?.orders)


  useEffect(() => {
    dispatch(getMonthlyData())
    dispatch(getYearlyData())
    dispatch(getOrders())
  }, [])

  useEffect(() => {
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let data = []
    let monthlyOrderCount = []
    if (monthlyDataState) {
      for (let index = 0; index < monthlyDataState[index]?.length; index++) {
        const element = monthlyDataState[index];

        data.push({ type: monthNames[element?.amount - 1], sales: element?.count });
        monthlyOrderCount.push({ type: monthNames[element?._id] })
      }
      setDataMonthly(data);
    }

  }, [monthlyDataState])

  useEffect(() => {
    const data1 = [];
    if (ordersState) {
      for (let i = 0; i < 20; i++) {
        data1.push({
          key: i,
          name: ordersState[i]?.user?.firstname + " " + ordersState[i]?.user?.lastname,
          // product: ordersState[i]?.orderItems?.length,
          price: ordersState[i]?.totalPrice,
          dprice: ordersState[i]?.totalPriceAfterDiscount,
          status: ordersState[i]?.orderStatus,
        });
      }
    }
    setOrderData(data1);
  }, [ordersState]);

  const data = monthlyDataState?.map((item) => ({
    type: item?.amount,
    sales: item.count,
    xfield: `${parseInt(item?._id?.month)}-Month `
  }))

  const config = {
    data,
    xField: 'xfield',
    yField: 'sales',
    xAxis: {
      range: [0, 1],
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    smooth: {
      tension: 0.5,  // đặt giá trị tension tùy ý
    },
  };

  return (
    <div className='container-xxl'>
      <div className='row'>
        <h3 className='mb-4 title'>DashBoard</h3>
        <div className='wrapper-main d-flex justify-content-between align-items-center gap-3'>
          <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
            <div>
              <p className="percent">70%</p> <h4 className='mb-0 desc'>Sales</h4>
            </div>
            <div className='d-flex flex-column align-items-end'>
              <h6 className='blue'><BsArrowDownRight className='me-2' />32%</h6>
              <p className='mb-0'>Last 24 hours</p>
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
            <div>
              <p className="percent">80%</p> <h4 className='mb-0 desc'>Revenue</h4>
            </div>
            <div className='d-flex flex-column align-items-end'>
              <h6 className='red'><BsArrowDownRight className='me-2' />10%</h6>
              <p className='mb-0'>Last 24 hours</p>
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
            <div>
              <p className="percent">60%</p> <h4 className='mb-0 desc'>Expenses</h4>
            </div>
            <div className='d-flex flex-column align-items-end'>
              <h6 className='green'><BsArrowDownRight className='me-2' />32%</h6>
              <p className='mb-0'>Last 24 hours</p>
            </div>
          </div>
        </div>
        <div className='col-6 mt-5 recent-order'>
          <div className=''>
            <h3 className='mb-4 sub-title'>Recent Orders</h3>
            <div>
              <Table columns={columns} dataSource={orderData} />
            </div>
          </div>
        </div>
        <div className='col-5 mt-5 main-statistic'>
          <div className='d-flex justify-content-between'>
            <h3 className='mb-4 sub-title'>Sale Statistic</h3>
            <div className='d-flex gap-3'>
              <Link>Daily</Link>
              <Link>Weekly</Link>
              <Link>Monthly</Link>
            </div>
          </div>
          <div>
            <Area {...config} />
          </div>
        </div>

        <div className='mt-4'>
          <h3 className='mb-4 sub-title'>Recent Reviews</h3>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard