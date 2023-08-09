import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createColor, getAColor, resetState, updateAColor } from '../features/color/colorSlice';
import { useLocation, useNavigate } from 'react-router-dom';

let schema = yup.object().shape({
  title: yup.string().required("*Color is Required"),
});

const AddColor = () => {

  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  const getColorId = location.pathname.split('/')[3]
  // console.log(getColorId);
  const newColor = useSelector((state) => state.color)
  const {
    isSuccess,
    isError,
    isLoading,
    createdColor,
    colorName,
    updatedColor
  } = newColor

  // fill 
  useEffect(() => {
    if (getColorId !== undefined) {
      dispatch(getAColor(getColorId))
    } else {
      dispatch(resetState())
    }
  }, [getColorId])

  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("Color Added Successfullly!");
    } if (updatedColor && isSuccess) {
      toast.success("Color Updated Successfullly!");
      navigate("/admin/list-color")
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: colorName || '',
    },

    validationSchema: schema,
    // update and reset form
    onSubmit: values => {
      if (getColorId !== undefined) {
        const data = { id: getColorId, colorData: values }
        dispatch(updateAColor(data))
      } else {
        dispatch(createColor(values));
        formik.resetForm()
        setTimeout(() => {
          dispatch(resetState())
        }, 1000)
      }
    },
  });

  return (
    <div>
      <h3 className='mb-4'>{getColorId !== undefined ? "Edit" : "Add"} Color</h3>
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
          <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>{getColorId !== undefined ? "Edit" : "Add"} Color</button>
        </form>
      </div>
    </div>
  )
}

export default AddColor