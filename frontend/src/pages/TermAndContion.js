import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import './Policies.scss'
import Container from '../components/Container'


const TermAndContion = () => {
    return (
        <>
            <Meta title={"Term And Conditions"} />
            <BreadCrum title="Term And Conditions" />
            <Container class1='privacy-wrapper py-5 home-wrapper-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='policy'>

                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default TermAndContion