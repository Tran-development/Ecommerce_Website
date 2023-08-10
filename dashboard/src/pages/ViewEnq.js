import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getAEnq, resetState, updateEnq } from '../features/enquiry/enquirySlice'
import {BiArrowBack} from 'react-icons/bi'

const ViewEnq = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getEnqId = location.pathname.split('/')[3]
    const getState = useSelector((state) => state.enquiry)
    const {
        enqName,
        enqMobile,
        enqEmail,
        enqComment,
        enqStatus,
    } = getState

    useEffect(() => {
        dispatch(getAEnq(getEnqId))
    }, [getEnqId])

    const goBack = () => {
        navigate(-1)
    }

    const setEnquiryStatus = (e, i) => {
        const data = {id: i, enqData: e}
        dispatch(updateEnq(data))
        dispatch(resetState())
        setTimeout(() => {
            dispatch(getAEnq(getEnqId))
        }, 100)
    }

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
            <h3>View Enquiry</h3>
            <button 
                className='bg-transparent border-0 d-flex align-items-center gap-2'
                onClick={() => goBack()}
            >
                <BiArrowBack className='fs-4 me-6'/> Go to back!
            </button>
            </div>
            <div className='mt-5 bg-white p-4 d-flex gap-3 flex-column rounded-3'>
                <div className='d-flex align-items-center gap-3'>
                    <h6 className='mb-0'>Name: </h6>
                    <p className='mb-0'>{enqName}</p>
                </div>
                <div className='d-flex align-items-center gap-3'>
                    <h6 className='mb-0'>Mobile: </h6>
                    <p className='mb-0'><a href={`tel:+84${enqMobile}`}>{enqMobile}</a></p>
                </div>
                <div className='d-flex align-items-center gap-3'>
                    <h6 className='mb-0'>Email: </h6>
                    <p className='mb-0'><a href={`mailto:{enqEmail}`}>{enqEmail}</a></p>
                </div>
                <div className='d-flex align-items-center gap-3'>
                    <h6 className='mb-0'>Comment: </h6>
                    <p className='mb-0'>{enqComment}</p>
                </div>
                <div className='d-flex align-items-center gap-3'>
                    <h6 className='mb-0'>Status: </h6>
                    <p className='mb-0'>{enqStatus}</p>
                </div>
                <div className='d-flex align-items-center gap-3'>
                    <h6 className='mb-0'>Change Status: </h6>
                    <div>
                        <select
                            name=''
                            defaultValue={enqStatus ? enqStatus : "Submitted"}
                            className='form-control form-select'
                            id=''
          onChange={(e) => setEnquiryStatus(e.target.value, getEnqId)}

                        >
                            <option value="Submitted">Submitted</option>    
                            <option value="Contacted">Contacted</option>    
                            <option value="In Progress">In Progress</option>    
                            <option value="Resolved">Resolved</option>    
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEnq