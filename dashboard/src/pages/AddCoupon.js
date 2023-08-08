import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createCoupon, resetState } from '../features/coupon/couponSlice';

let schema = yup.object().shape({
    name: yup.string().required("*Coupon code is Required"),
    expiry: yup.date().required("*Expiry Date is Required"),
    discount: yup.number().required("*Discount Percent is Required"),
});

const AddCoupon = () => {

    const dispatch = useDispatch()
    const newCoupon = useSelector((state) => state.coupon)
    const { isSuccess, isError, isLoading, createdCoupon } = newCoupon

    useEffect(() => {
        if (isSuccess && createdCoupon) {
            toast.success("coupon Added Successfullly!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);


    const formik = useFormik({
        initialValues: {
            name: '',
            expiry: '',
            discount: ''
        },

        validationSchema: schema,
        onSubmit: values => {
            dispatch(createCoupon(values));
            formik.resetForm()
            setTimeout(() => {
                dispatch(resetState())
            }, 3000)
        },
    });

    return (
        <div>
            <h3 className='mb-4'>Add Coupon</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter Coupon Code"
                        className="form-control mb-0"
                        name="name"
                        onCh={formik.handleChange("name")}
                        onBl={formik.handleBlur("name")}
                        val={formik.values.name}
                        id="name"
                    />
                    <div className='validate-error'>
                        {formik.touched.name && formik.errors.name ? (
                            <div>{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <CustomInput
                        type="date"
                        label="Enter Expiry Date"
                        className="form-control mt-3 mb-0"
                        name="expiry"
                        onCh={formik.handleChange("expiry")}
                        onBl={formik.handleBlur("expiry")}
                        val={formik.values.expiry}
                        id="date"
                    />
                    <div className='validate-error'>
                        {formik.touched.expiry && formik.errors.expiry ? (
                            <div>{formik.errors.expiry}</div>
                        ) : null}
                    </div>

                    <CustomInput
                        type="number"
                        label="Enter Discount"
                        className="form-control mt-3 mb-0"
                        name="discount"
                        onCh={formik.handleChange("discount")}
                        onBl={formik.handleBlur("discount")}
                        val={formik.values.discount}
                    />
                    <div className='validate-error'>
                        {formik.touched.discount && formik.errors.discount ? (
                            <div>{formik.errors.discount}</div>
                        ) : null}
                    </div>

                    <button
                        className='btn btn-success border-0 rounded-3 my-5'
                        type='submit'>
                        Add Coupon
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCoupon