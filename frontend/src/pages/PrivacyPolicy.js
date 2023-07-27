import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import './Policies.scss'

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={"Privacy Policy"} />
            <BreadCrum title="Privacy Policy" />
            <div className='privacy-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='policy'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy