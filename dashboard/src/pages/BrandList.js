import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { deleteABrand, getBrands } from '../features/brand/brandSlice';
import { resetState } from '../features/blog/blogSlice';
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

const BrandList = () => {

  const [open, setOpen] = useState(false);
  const [brandId, setBrandId] = useState("")

  const showModal = (e) => {
    setOpen(true);
    setBrandId(e)
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBrands())
    dispatch(resetState())
  }, [])

  const brandState = useSelector((state) => state.brand.brands)
  const data1 = [];
  for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i + 1,
      title: brandState[i].title,
      action: (
        <>
          <Link to={`/admin/brand/${brandState[i]._id}`} className='ms-3 fs-5 text-danger'>
            <BiEditAlt />
          </Link>
          <button className='ms-3 fs-5 text-danger bg-transparent border-0' to="/"
            onClick={() => showModal(brandState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      )
    });
  }

  const deleteBrand = (e) => {deleteABrand
    dispatch(deleteABrand(e))
    setOpen(false)
    setTimeout(() => {
      dispatch(getBrands())
    }, 100)
  }

  return (
    <div>
      <h3>Brands</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => { deleteBrand(brandId) }}
        title="Are you sure you want to delete this brand?"
      />
    </div>
  )
}

export default BrandList