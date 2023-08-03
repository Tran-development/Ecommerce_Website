import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { getColors } from '../features/color/colorSlice';

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

const Colorlist = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getColors())
  }, [])

  const colorState = useSelector((state) => state.color.colors)
  const data1 = [];
for (let i = 0; i < colorState.length; i++) {
  data1.push({
    key: i,
    title: colorState[i].title,
    product: 32,
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
      <h3>Colors</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default Colorlist