import React from 'react'
import { Button as MuiButton, styled } from '@mui/material'

function Button({ children, ...props }) {
  return <StyledMuiButton {...props}>{children}</StyledMuiButton>
}

export default Button

const StyledMuiButton = styled(MuiButton)(() => ({
  width: '140px',
  height: '45px',
  fontFamily: 'Roboto',
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '2.5px',
  fontWeight: '500',
  color: '#000',
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: '45px',
  boxShadow: ' 0px 8px 15px rgba(0, 0, 0, 0.1)',
  transition: ' all 0.3s ease 0s',
  cursor: 'pointer',
  outline: 'none',
  '&:hover': {
    backgroundColor: '#35b8be',
    boxShadow: '0px 15px 20px rgba(46, 217, 229, 0.4)',
    color: '#fff',
    transform: 'translateY(-7px)',
  },
}))
