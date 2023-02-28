import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import { ReactComponent as BurgerMenu } from './UI/burger.svg'
import Button from './UI/Button'
import BasicModal from './UI/modal/MuiModal'

function Header() {
  const [open, setOpen] = useState(false)
  const [bgColor, setBgColor] = useState(true)

  const changeColor = () => {
    if (window.scrollY) {
      setBgColor(false)
    }
    if (window.scrollY === 0) {
      setBgColor(true)
    }
    return bgColor
  }
  useEffect(() => {
    changeColor()
    window.addEventListener('scroll', changeColor)
  })

  const handleOpen = () => setOpen(true)

  return (
    <>
      <Container bgColor={bgColor}>
        <Logo>OrderFood</Logo>
        <ButtonContainer style={{ marginRight: '4rem' }}>
          <Button onClick={handleOpen}>
            <ShoppingCartCheckoutIcon />
            Your cart
          </Button>
        </ButtonContainer>
        <Burger onClick={handleOpen} />
      </Container>
      <BasicModal open={open} setOpen={setOpen} />
    </>
  )
}

export default Header
const Burger = styled(BurgerMenu)`
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`

const ButtonContainer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`

const Container = styled.header`
  width: 100%;
  height: 101px;
  background-color: ${(props) => (props.bgColor ? '#35b8be' : '#882323')};
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
  color: #ffffff;
  margin: 0;
  margin-left: 5rem;
`
