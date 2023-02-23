import Button from './UI/Button'
import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <>
    <Container>
        <Logo>OrderFood</Logo> 
        <div style={{marginRight:"4rem"}}>
        <Button>Add</Button>
        </div>
    </Container>
    </>
  )
}

export default Header

const Container = styled.header`
    width: 100%;
    height: 101px;
    background-color: #35b8be;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding-left: 120px; */
    padding-right: 120px;
    position: fixed;
    z-index: 1;
    top: 0;
`

const Logo = styled.p`
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    color: #FFFFFF;
    margin: 0;
    margin-left: 5rem;
`