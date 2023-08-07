import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBrand } from '../features/brand/brandSlice';

let schema = yup.object().shape({
    title: yup.string().required("*Brand name is Required"),
});

const AddBrand = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const newBrand = useSelector((state) => state.brand)
    const { isSuccess, isError, isLoading, createdBrand } = newBrand

    useEffect(() => {
        if (isSuccess && createdBrand) {
            toast.success("Brand Added Successfullly!");
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
            dispatch(createBrand(values));
            formik.resetForm()
            setTimeout(() => {
                navigate("/admin/list-brand")
            }, 3000)
        },
    });

    return (
        <div>
            <h3 className='mb-4'>Add Brand</h3>
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
                        Add Brand
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddBrand