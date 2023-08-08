import { React, useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Dropzone from 'react-dropzone'
import { delImg, uploadImg } from '../features/upload/uploadSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createBlog, resetState } from '../features/blog/blogSlice';
import { getbCategories } from '../features/bcategory/bcategorySlice';

let schema = yup.object().shape({
    title: yup.string().required("*Title is Required"),
    description: yup.string().required("*Description is Required"),
    category: yup.string().required("*Category is Required"),
});

const AddBlog = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getbCategories())
    }, [])

    const imgState = useSelector((state) => state.upload.images);
    const bCatState = useSelector((state) => state.bCategory.bCategories);
    const blogState = useSelector((state) => state.blog);
    const { isSuccess, isError, isLoading, createdBlog } = blogState

    useEffect(() => {
        if (isSuccess && createdBlog) {
            toast.success("Blog Added Successfullly!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);

    const img = []
    imgState.forEach((i) => {
        img.push({
            public_id: i.public_id,
            url: i.url,
        })
    })

    useEffect(() => {
        formik.values.images = img
    }, [img])

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            category: '',
            images: ''
        },

        validationSchema: schema,
        onSubmit: values => {
            dispatch(createBlog(values));
            formik.resetForm()
            setTimeout(() => {
                dispatch(resetState())
            }, 3000)
        },
    });
    const [desc, setDesc] = useState()

    const handleDesc = (e) => {
        setDesc(e)
    }


    return (
        <div>
            <h3 className='mb-4'>Add Blog</h3>

            <div>
                <form action='' onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter Blog Title"
                        name="title"
                        onCh={formik.handleChange("title")}
                        onBl={formik.handleBlur("title")}
                        val={formik.values.title} />
                    <div className='validate-error'>
                        {formik.touched.title && formik.errors.title ? (
                            <div>{formik.errors.title}</div>
                        ) : null}
                    </div>
                    <select
                        name="category"
                        onChange={formik.handleChange("category")}
                        onBlur={formik.handleBlur("category")}
                        val={formik.values.category}
                        className='form-control py-3 mt-3 mb-0' id=""
                    >
                        <option value="">Select Blog Category</option>
                        {bCatState.map((i, j) => {
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
                    <ReactQuill
                        theme="snow"
                        className="mt-3"
                        name="description"
                        onChange={formik.handleChange("description")}
                        value={formik.values.description}
                    />
                    <div className='validate-error'>
                        {formik.touched.description && formik.errors.description ? (
                            <div>{formik.errors.description}</div>
                        ) : null}
                    </div>
                    <div className='bg-white border-1 py-5 mt-3 text-center'>
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
                    <button type='text' className='btn border-0 my-5'>Add Blog</button>
                </form>
            </div>
        </div>
    )
}

export default AddBlog