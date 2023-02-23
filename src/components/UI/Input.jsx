import React from 'react'
import {TextField} from "@mui/material"
import styled from 'styled-components'

const Input = ({label,inputType,onChange,value}) => {
 
  return (
    <InputContainer>
          <TextField
          onChange={onChange}
          value={value}
          id="outlined-password-input"
          label={label}
          type={inputType}
          color='primary'
          size='small'
        //   autoComplete="current-password"
        /> 
    </InputContainer>
  )
}

export default Input

const InputContainer = styled.div`
text-align: center;
     /* display: flex;
  flex-direction: column;
  gap: 20px; */
  
`