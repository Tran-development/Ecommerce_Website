import { React, useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlice';
import { getCategories } from '../features/category/categorySlice';
import { getColors } from '../features/color/colorSlice';
import { Select } from 'antd'
import Dropzone from 'react-dropzone'
import { delImg, uploadImg } from '../features/upload/uploadSlice';
import { createProducts } from '../features/product/productSlice';
import { useNavigate } from 'react-router-dom';

let schema = yup.object().shape({
    title: yup.string().required("*Title is Required"),
    description: yup.string().required("*Description is Required"),
    price: yup.number().required("*Price is Required"),
    brand: yup.string().required("*Brand is Required"),
    category: yup.string().required("*Category is Required"),
    tags: yup.string().required("*Tag is Required"),
    color: yup.array().min(1, "*Pick at least one color").required("*Color is Required"),
    quantity: yup.number().required("*Quantity is Required"),
});

const AddProduct = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [color, setColor] = useState([])
    const [images, setImages] = useState([])

    useEffect(() => {
        dispatch(getBrands())
        dispatch(getCategories())
        dispatch(getColors())
    }, [])

    const brandState = useSelector((state) => state.brand.brands)
    const categoryState = useSelector((state) => state.category.categories)
    const colorState = useSelector((state) => state.color.colors)
    const imgState = useSelector((state) => state.upload.images)
    const newProduct = useSelector((state) => state.product)
    const { isSuccess, isError, isLoading, createdProduct } = newProduct

    useEffect(() => {
        if (isSuccess && createdProduct) {
          toast.success("Product Added Successfullly!");
        }
        if (isError) {
          toast.error("Something Went Wrong!");
        }
      }, [isSuccess, isError, isLoading]);

    const colors = []
    colorState.forEach((i) => {
        colors.push({
            value: i._id,
            label: i.title,
        })
    })

    const img = []
    imgState.forEach((i) => {
        img.push({
            public_id: i.public_id,
            url: i.url,
        })
    })

    useEffect(() => {
        formik.values.color = color ? color : " "
        formik.values.images = img
    }, [color, img])

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
            brand: '',
            category: '',
            tags: '',
            color: '',
            quantity: '',
            images: ''
        },

        validationSchema: schema,
        onSubmit: values => {
            // alert(JSON.stringify(values))
            dispatch(createProducts(values));
            formik.resetForm()            
            setColor(null)
            setTimeout(() => {
                navigate("/admin/list-product")
            }, 3000)
        },
    });
    const [desc, setDesc] = useState()

    const handleDesc = (e) => {
        setDesc(e)
    }

    const handleColors = (colors) => {
        setColor(colors)
        // console.log(colors);
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
                    <div className='mt-3 mb-0'>
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
                        val={formik.values.brand} className='form-control py-3 mb-0 mt-3' id=""
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
                        className='form-control py-3 mt-3 mb-0' id=""
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

                    <select
                        name="tags"
                        onChange={formik.handleChange("tags")}
                        onBlur={formik.handleBlur("tags")}
                        val={formik.values.tags}
                        className='form-control py-3 mb-0 mt-3' id=""
                    >
                        <option value="" disabled>Select Tags</option>
                        <option value="featured">Featured</option>
                        <option value="popular">Poplular</option>
                        <option value="special">Special</option>

                    </select>

                    <div className='validate-error'>
                        {formik.touched.tags && formik.errors.tags ? (
                            <div>{formik.errors.tags}</div>
                        ) : null}
                    </div>

                    <div className='mt-3 mb-0'>
                    <Select
                        mode="multiple"
                        allowClear
                        className='w-100'
                        placeholder="Select colors"
                        defaultValue={colors}
                        onChange={(i) => handleColors(i)}
                        options={colors}
                        // className="mt-3 mb-0"
                    />
                    </div>

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
                        label="Enter Product Quantity" 
                        className="mt-3 mb-0"
                        />
                    <div className='validate-error mb-3'>
                        {formik.touched.quantity && formik.errors.quantity ? (
                            <div>{formik.errors.quantity}</div>
                        ) : null}
                    </div>
                    <div className='bg-white border-1 py-5 text-center'>
                        <Dropzone
                            onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}                            
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>
                                            Drag 'n' drop some files here, or click to select files
                                        </p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div className='show-images mt-3 d-flex flex-wrap gap-3'>
                        {imgState?.map((i, j) => {
                            return (
                                <div className='position-relative' key={j}>
                                    <button
                                        type='button'
                                        className='btn-close position-absolute'
                                        style={{ top: "10px", right: "10px" }}
                                        onClick={() => dispatch(delImg(i.public_id))}
                                    />
                                    <img src={i.url} alt='' width={200} height={200} />
                                </div>
                            )
                        })}
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