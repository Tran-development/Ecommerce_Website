import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createCoupon, getACoupon, resetState, updateACoupon } from '../features/coupon/couponSlice';
import { useLocation, useNavigate } from 'react-router-dom';

let schema = yup.object().shape({
    name: yup.string().required("*Coupon code is Required"),
    expiry: yup.date().required("*Expiry Date is Required"),
    discount: yup.number().required("*Discount Percent is Required"),
});

const AddCoupon = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const getCouponId = location.pathname.split('/')[3]

    // const changeDateFormat = (date) => {
    //     const newDate = new Date(date).toLocaleDateString()
    //     const [month, day, year] = newDate.split("/")
    //     return [year, month, day].join("-")
    // }

    const newCoupon = useSelector((state) => state.coupon)
    const {
        isSuccess,
        isError,
        isLoading,
        createdCoupon,
        couponName,
        couponExpiry,
        couponDiscount,
        updatedCoupon,
    } = newCoupon

    useEffect(() => {
        if (getCouponId !== undefined) {
            dispatch(getACoupon(getCouponId))
        } else {
            dispatch(resetState())
        }
    }, [getCouponId])

    useEffect(() => {
        if (isSuccess && createdCoupon) {
            toast.success("Coupon Added Successfullly!");
        }
        if (isSuccess && updatedCoupon) {
            toast.success("Coupon Updated Successfullly!");
            navigate("/admin/coupon-list");
        }
        if (isError && couponName && couponDiscount && couponExpiry) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: couponName || '',
            expiry: new Date().toISOString().slice(0, 10) || '',
            discount: couponDiscount || ''
        },

        validationSchema: schema,
        // update and reset form
        onSubmit: (values) => {
            if (getCouponId !== undefined) {
                const data = { id: getCouponId, couponData: values };
                dispatch(updateACoupon(data));
            } else {
                dispatch(createCoupon(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState);
                }, 300);
            }
        },
    });

    return (
        <div>
            <h3 className='mb-4'>{getCouponId !== undefined ? "Edit" : "Add"} Coupon</h3>
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
                        {getCouponId !== undefined ? "Edit" : "Add"} Coupon
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCoupon