import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai'
import { getEnquiries } from '../features/enquiry/enquirySlice';

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
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  
const Enquiries = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEnquiries())
  }, [])

  const enquiryState = useSelector((state) => state.enquiry.enquiries)
  const data1 = [];
  for (let i = 0; i < enquiryState.length; i++) {
    data1.push({
      key: i + 1,
      name: enquiryState[i].name,
      email: enquiryState[i].email,
      phone: enquiryState[i].mobile,
      status: <>
      <select className='form-control form-select'>
        <option>Set Status</option>        
      </select>
    </>,
      action: (
        <>
          <Link className='ms-3 fs-5 text-danger' to="/">
            <AiFillDelete />
          </Link>
        </>
      )
    });
  }

    return (
        <div>
            <h3>Enquiries</h3>
            <div>
            <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default Enquiries