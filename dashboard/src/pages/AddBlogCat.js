import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createbCategory } from '../features/bcategory/bcategorySlice';

let schema = yup.object().shape({
  title: yup.string().required("*Blog Category name is Required"),
});

const AddBlogCat = () => {


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const newbCate = useSelector((state) => state.bCategory)
  const { isSuccess, isError, isLoading, createdbCate } = newbCate

  useEffect(() => {
    if (isSuccess && createdbCate) {
      toast.success("Blog Category Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);


  const formik = useFormik({
    initialValues: {
      title: '',
    },

    validationSchema: schema,
    onSubmit: values => {
      dispatch(createbCategory(values));
      formik.resetForm()
      setTimeout(() => {
        navigate("/admin/blog-category-list")
      }, 3000)
    },
  });

  return (
    <div>
      <h3 className='mb-4'>Add Blog Category</h3>
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
          <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Add Blog Category</button>
        </form>
      </div>
    </div>
  )
}

export default AddBlogCat