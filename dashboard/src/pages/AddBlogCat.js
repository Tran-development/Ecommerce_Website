import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createbCategory, getABCategory, resetState, updateABCategory } from '../features/bcategory/bcategorySlice';
import { useLocation, useNavigate } from 'react-router-dom';

let schema = yup.object().shape({
  title: yup.string().required("*Blog Category name is Required"),
});

const AddBlogCat = () => {


  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  const getbCateId = location.pathname.split("/")[3]
  // console.log(getbCateId);
  const newbCate = useSelector((state) => state.bCategory)
  const {
    isSuccess,
    isError,
    isLoading,
    createdbCate,
    bcategoryName,
    updatedbCategory
  } = newbCate

  useEffect(() => {
    if (getbCateId !== undefined) {
      dispatch(getABCategory(getbCateId))
    } else {
      dispatch(resetState())
    }
  }, [getbCateId])

  useEffect(() => {
    if (isSuccess && createdbCate) {
      toast.success("Blog Category Added Successfullly!");
    } if (updatedbCategory && isSuccess) {
      toast.success("Blog Category Added Successfullly!");
      navigate("/admin/blogcategory-list")
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: bcategoryName || '',
    },

    validationSchema: schema,
    onSubmit: values => {
      if (getbCateId !== undefined) {
        const data = {id: getbCateId, bcategoryData: values}
        dispatch(updateABCategory(data))
      } else {
        dispatch(createbCategory(values));
        formik.resetForm()
        setTimeout(() => {
          dispatch(resetState())
        }, 3000)        
      }
    },
  });

  return (
    <div>
      <h3 className='mb-4'>{getbCateId !== undefined ? "Edit" : "Add"} Blog Category</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Enter Blog Category"
            className="form-control"
            name="title"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
          />
          <div className='validate-error'>
            {formik.touched.title && formik.errors.title ? (
              <div>{formik.errors.title}</div>
            ) : null}
          </div>
          <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>{getbCateId !== undefined ? "Save" : "Add"} Blog Category</button>
        </form>
      </div>
    </div>
  )
}

export default AddBlogCat