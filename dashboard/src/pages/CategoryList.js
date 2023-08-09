import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { deleteACategory, getCategories } from '../features/category/categorySlice';
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

const CategoryList = () => {

  const [open, setOpen] = useState(false)
  const [cateId, setCateId] = useState("")

  const showModal = (e) => {
    setOpen(true);
    setCateId(e)
  }

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    // loi popup twice times
    dispatch(resetState())
  }, [])

  const categoryState = useSelector((state) => state.category.categories)
  const data1 = [];
  for (let i = 0; i < categoryState.length; i++) {
    data1.push({
      key: i + 1,
      title: categoryState[i].title,
      action: (
        <>
          <Link to={`/admin/category/${categoryState[i]._id}`} className='ms-3 fs-5 text-danger'>
            <BiEditAlt />
          </Link>
          <button className='ms-3 fs-5 text-danger bg-transparent border-0'
            onClick={() => showModal(categoryState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      )
    });
  }

  const deleteCategory = (e) => {
    dispatch(deleteACategory(e))
    setOpen(false)
    setTimeout(() => {
      dispatch(getCategories())
    }, 100)
  }

  return (
    <div>
      <h3>Product Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {deleteCategory(cateId)}}
        title="Are you sure you want to delete this Product Category?"
      />
    </div>
  )
}

export default CategoryList