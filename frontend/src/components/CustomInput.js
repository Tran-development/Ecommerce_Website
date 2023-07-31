import React from 'react'

const CustomInput = (props) => {

    const {type, name, placeholder, className, style} = props

    return (
        <div>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                className={`form-control ${className}`}
                style={style}
            />
        </div>
    )
}

export default CustomInput