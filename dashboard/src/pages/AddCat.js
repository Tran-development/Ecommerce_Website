import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, getACategory, resetState, updateACategory } from '../features/category/categorySlice';
import { useLocation, useNavigate } from 'react-router-dom';


let schema = yup.object().shape({
    title: yup.string().required("*Category name is Required"),
});

const AddCat = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const getCateId = location.pathname.split('/')[3]
    const newCategory = useSelector((state) => state.category)
    const {
        isSuccess,
        isError,
        isLoading,
        createdCategory,
        categoryName,
        updatedCategory
    } = newCategory 

    // fill title on input
    useEffect(() => {
        if (getCateId !== undefined) {
            dispatch(getACategory(getCateId))
        } else {
            dispatch(resetState())
        }
    }, [getCateId])

    useEffect(() => {
        if (isSuccess && createdCategory) {
            toast.success("Category Added Successfullly!");
        } if (updatedCategory && isSuccess) {
            toast.success("Category Updated Successfully!")
            navigate("/admin/list-category")
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: categoryName || '',
        },

        validationSchema: schema,
        // update and reset form
        onSubmit: values => {
            if (getCateId !== undefined) {
                const data = { id: getCateId, categoryData: values }
                dispatch(updateACategory(data))
            } else {
                dispatch(createCategory(values));
                formik.resetForm()
                setTimeout(() => {
                    dispatch(resetState())
                }, 1000)
            }
        },
    });

    return (
        <div>
            <h3 className='mb-4'>{getCateId !== undefined ? "Edit" : "Add"} Category</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter Category Name"
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
                    <button
                        className='btn btn-success border-0 rounded-3 my-5'
                        type='submit'>
                        {getCateId !== undefined ? "Edit" : "Add"} Category
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCat