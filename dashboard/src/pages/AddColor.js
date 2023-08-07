import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createColor } from '../features/color/colorSlice';

let schema = yup.object().shape({
  title: yup.string().required("*Color is Required"),
});

const AddColor = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const newColor = useSelector((state) => state.color)
  const { isSuccess, isError, isLoading, createdColor } = newColor

  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("Color Added Successfullly!");
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
      dispatch(createColor(values));
      formik.resetForm()
      setTimeout(() => {
        navigate("/admin/list-color")
      }, 3000)
    },
  });

  return (
    <div>
      <h3 className='mb-4'>Add Color</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="color"
            label="Enter Color"
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

export default AddColor