import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { deleteAColor, getAColor, getColors, resetState } from '../features/color/colorSlice';
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
    title: 'Action',
    dataIndex: 'action',
  },
];

const Colorlist = () => {


  const [open, setOpen] = useState(false)
  const [colorId, setColorId] = useState("")

  const showModal = (e) => {
    setOpen(true);
    setColorId(e)
  }

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getColors())
    dispatch(resetState())
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
          <Link to={`/admin/color/${colorState[i]._id}`} className='ms-3 fs-5 text-danger'>
            <BiEditAlt />
          </Link>
          <button className='ms-3 fs-5 text-danger bg-transparent border-0'
            onClick={() => showModal(colorState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      )
    });
  }

  const deleteColor = (e) => {
    dispatch(deleteAColor(e))
    setOpen(false)
    setTimeout(() => {
      dispatch(getColors())
    }, 100)
  }

  return (
    <div>
      <h3>Colors</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => { deleteColor(colorId) }}
        title="Are you sure you want to delete this Color?"
      />
    </div>
  )
}

export default Colorlist