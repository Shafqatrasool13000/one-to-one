import { Input } from 'antd'
import React from 'react'
import { StyledInputField } from './StyledInputField'

const InputField = ({placeholder,label}) => {
    return (
        <StyledInputField>
            <label htmlFor="">{label}</label>
            <Input size="large" placeholder={placeholder} />
        </StyledInputField>
    )
}

export default InputField