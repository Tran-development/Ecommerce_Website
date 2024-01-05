import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createBrand, getABrand, resetState, updateABrand } from '../features/brand/brandSlice';
import { useLocation, useNavigate } from 'react-router-dom';

let schema = yup.object().shape({
    title: yup.string().required("*Brand name is Required"),
});

const AddBrand = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const getBrandId = location.pathname.split('/')[3]
    const newBrand = useSelector((state) => state.brand)
    const {
        isSuccess,
        isError,
        isLoading,
        createdBrand,
        brandName,
        updatedBrand,
    } = newBrand

    useEffect(() => {
        if (getBrandId !== undefined) {
            dispatch(getABrand(getBrandId))
        } else {
            dispatch(resetState())
        }
    }, [getBrandId])

    useEffect(() => {
        if (isSuccess && createdBrand) {
            toast.success("Brand Added Successfullly!");
        }
        if (updatedBrand && isSuccess) {
            toast.success("Brand Updated Successfully")
            navigate("/admin/list-brand")
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: brandName || "",
        },

        validationSchema: schema,
        onSubmit: values => {
            if (getBrandId !== undefined) {
                const data = { id: getBrandId, brandData: values }
                dispatch(updateABrand(data))
            } else {
                dispatch(createBrand(values));
                formik.resetForm()
                setTimeout(() => {
                    dispatch(resetState())
                }, 1000)
            }
        },
    });

    return (
        <div>
            <h3 className='mb-4'>{getBrandId !== undefined ? "Edit" : "Add"} Brand</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter Brand Name"
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
                        {getBrandId !== undefined ? "Save" : "Add"} Brand
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddBrand