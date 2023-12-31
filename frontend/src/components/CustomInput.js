import React from 'react'

const CustomInput = (props) => {

    const { type, label, i_id, i_class, name, val, onCh, onBl, disabled } = props
    return (
        <div className='form-floating mt-3'>
            <input 
                type={type}
                className={`form-control ${i_class} text-dark`}
                id={i_id}
                placeholder={label} 
                name={name}
                value={val}
                onChange={onCh}
                onBlur={onBl}   
                disabled={disabled}            
            />
            <label htmlFor={label}>{label}</label>
        </div>
    )
}

export default CustomInput