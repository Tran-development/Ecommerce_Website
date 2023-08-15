import React from 'react'
import './Color.scss'

const Color = (props) => {
    const { colorData, setColor } = props
    console.log(colorData);
    return (
        <>
            <ul className='colors ps-0'>
                {
                    colorData && colorData.map((item, index) => {
                        return (
                            <li
                                style={{ backgroundColor: item?.title }}
                                key={index}
                                onClick={() => setColor(item?._id)}
                            ></li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Color