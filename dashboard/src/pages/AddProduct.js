import { React, useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlice';
import { getCategories } from '../features/category/categorySlice';
import { getColors } from '../features/color/colorSlice';
import Multiselect from "react-widgets/Multiselect";
import "react-widgets/styles.css";
import Dropzone from 'react-dropzone'

let schema = yup.object().shape({
    title: yup.string().required("*Title is Required"),
    description: yup.string().required("*Description is Required"),
    price: yup.number().required("*Price is Required"),
    brand: yup.string().required("*Brand is Required"),
    category: yup.string().required("*Category is Required"),
    color: yup.array().required("*Color is Required"),
    quantity: yup.number().required("*Quantity is Required"),
});

const AddProduct = () => {

    const dispatch = useDispatch()
    const [color, setColor] = useState([])

    useEffect(() => {
        dispatch(getBrands())
        dispatch(getCategories())
        dispatch(getColors())
        formik.values.color = color
    }, [])

    const brandState = useSelector((state) => state.brand.brands)
    const categoryState = useSelector((state) => state.category.categories)
    const colorState = useSelector((state) => state.color.colors)
    const colors = []

    colorState.forEach((i) => {
        colors.push({
            _id: i._id,
            color: i.title,
        })
    })

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
            brand: '',
            category: '',
            color: '',
            quantity: ''
        },

        validationSchema: schema,
        onSubmit: values => {
            dispatch(login(values));
        },
    });
    const [desc, setDesc] = useState()

    const handleDesc = (e) => {
        setDesc(e)
    }

    return (
        <div>
            <h3 className='mb-4'>Add Product</h3>
            <div>
                <form action='' onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter Product Title"
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
                    <div className='mb-3'>
                        <ReactQuill
                            theme="snow"
                            name="description"
                            onChange={formik.handleChange("description")}
                            value={formik.values.description}
                        />
                        <div className='validate-error'>
                            {formik.touched.description && formik.errors.description ? (
                                <div>{formik.errors.description}</div>
                            ) : null}
                        </div>
                    </div>
                    <CustomInput
                        type="number"
                        label="Enter Product Price"
                        className="form-control"
                        name="price"
                        onCh={formik.handleChange("price")}
                        onBl={formik.handleBlur("price")}
                        val={formik.values.price}
                    />
                    <div className='validate-error'>
                        {formik.touched.price && formik.errors.price ? (
                            <div>{formik.errors.price}</div>
                        ) : null}
                    </div>
                    <select
                        name="brand"
                        onChange={formik.handleChange("brand")}
                        onBlur={formik.handleBlur("brand")}
                        val={formik.values.brand} className='form-control py-3 mb-3 mt-3' id=""
                    >
                        <option value="">Select Brand</option>
                        {brandState.map((i, j) => {
                            return (
                                <option key={j} value={i.title}>
                                    {i.title}
                                </option>
                            )
                        })}
                    </select>
                    <div className='validate-error'>
                        {formik.touched.brand && formik.errors.brand ? (
                            <div>{formik.errors.brand}</div>
                        ) : null}
                    </div>
                    <select
                        name="category"
                        onChange={formik.handleChange("category")}
                        onBlur={formik.handleBlur("category")}
                        val={formik.values.category}
                        className='form-control py-3 mb-3' id=""
                    >
                        <option value="">Select Category</option>
                        {categoryState.map((i, j) => {
                            return (
                                <option key={j} value={i.title}>{i.title}</option>
                            )
                        })}
                    </select>
                    <div className='validate-error'>
                        {formik.touched.category && formik.errors.category ? (
                            <div>{formik.errors.category}</div>
                        ) : null}
                    </div>
                    <Multiselect
                        name="color"
                        dataKey="id"
                        textField="color"
                        data={colors}
                        value={formik.values.color || []}
                        placeholder="Select Color"
                        onChange={(e) => setColor(e)}
                    />
                    <div className='validate-error'>
                        {formik.touched.color && formik.errors.color ? (
                            <div>{formik.errors.color}</div>
                        ) : null}
                    </div>
                    <CustomInput
                        name="quantity"
                        onCh={formik.handleChange("quantity")}
                        onBl={formik.handleBlur("quantity")}
                        val={formik.values.quantity}
                        type="number"
                        label="Enter Product Quantity" />
                    <div className='validate-error mb-3'>
                        {formik.touched.quantity && formik.errors.quantity ? (
                            <div>{formik.errors.quantity}</div>
                        ) : null}
                    </div>
                    <div className='bg-white border-1 py-5 text-center'>
                        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <button
                        className='btn btn-success border-0 rounded-3 my-5'
                        type='submit'>
                        Add Product
                    </button>
                </form>
            </div>
        </div >

    )
}

export default AddProduct