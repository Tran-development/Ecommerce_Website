import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import './Policies.scss'
import Container from '../components/Container'

const ShippingPolicy = () => {
    return (
        <>
            <Meta title={"Shipping Policy"} />
            <BreadCrum title="Shipping Policy" />
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

export default ShippingPolicy