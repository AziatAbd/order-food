import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
// import styledComponent from 'styled-components'
// import AddIcon from '@mui/icons-material/Add'
// import RemoveIcon from '@mui/icons-material/Remove'
import { styled, TextField } from '@mui/material'
// import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import Button from '../Button'
import { mealsActions } from '../../../store/meals/mealsSlice'

export default function BasicModal({ open, setOpen }) {
  const dispatch = useDispatch()

  const [nameValue, setNameValue] = useState('')
  const [priceValue, setPriceValue] = useState()
  const [descripValue, setDescripValue] = useState('')

  // const { meals } = useSelector((state) => state.meal)

  const changeNameValue = (e) => {
    setNameValue(e.target.value)
  }
  const changePriceValue = (e) => {
    setPriceValue(e.target.value)
  }
  const changeDescripValue = (e) => {
    setDescripValue(e.target.value)
  }

  const addMealHandler = () => {
    const newMeal = {
      id: v4(),
      text: nameValue,
      description: descripValue,
      price: priceValue,
    }
    dispatch(mealsActions.addMeal(newMeal))
  }

  const handleClose = () => setOpen(false)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <Container>
            <StyledTextFiled
              label="Name"
              type="text"
              value={nameValue}
              onChange={changeNameValue}
            />
            <StyledTextFiled
              label="Price"
              type="number"
              value={priceValue}
              onChange={changePriceValue}
            />
            <StyledTextFiled
              label="Description"
              type="text"
              value={descripValue}
              onChange={changeDescripValue}
            />
            <Button type="button" onClick={addMealHandler}>
              Add
            </Button>

            {/* {meals.map((item) => (
              <>
                <StyledTilte key={item.id}>{item.text}</StyledTilte>
                <Content>
                  <PriceAndAmountContainer>
                    <StyledPrice>{item.price}</StyledPrice>
                    <AmountStyle> x4</AmountStyle>
                  </PriceAndAmountContainer>

                  <CounterContainer>
                    <Button>
                      <RemoveIcon />
                    </Button>
                    <Button>
                      <AddIcon />
                    </Button>
                  </CounterContainer>
                </Content>
              </>
            ))} */}
          </Container>
          <Button onClick={handleClose}>Close</Button>
          <Button>Order</Button>
        </StyledBox>
      </Modal>
    </div>
  )
}

const StyledBox = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '700px',
  backgroundColor: '#fff',
  boxShadow: '24px',
  padding: '20px',
  borderRadius: '14px',
}))

const Container = styled('div')(() => ({
  display: 'grid',
  padding: '24px 0',
  borderBottom: '1px solid black',
  width: '100%',
  marginBottom: '30px auto',
  // maxHeight: ' 190px',
  gap: '10px',
  overflow: 'auto',
}))

const StyledTextFiled = styled(TextField)(() => ({
  // width: '50%',
}))

// const PriceAndAmountContainer = styledComponent.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 153px;
//   margin: 0;
// `
// const CounterContainer = styledComponent.div`
//   > button {
//     margin-right: 14px;
//   }
// `
// const Content = styledComponent.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom: 1px solid;
//   margin-bottom: 20px;
//   padding-bottom: 20px;

//   :last-child {
//     border-bottom: none;
//   }

// `
// const StyledTilte = styledComponent.p`
//   font-weight: 600;
//   font-size: 20px;
//   line-height: 30px;
//   color: #222222;
//   margin: 0 0 12px;
// `

// const StyledPrice = styledComponent.p`
//   margin: 0;
//   font-weight: 600;
//   font-size: 18px;
//   line-height: 27px;

//   color: #35b8be
// `
// const AmountStyle = styledComponent.span`
//   border: 1px solid #d6d6d6;
//   border-radius: 6px;
//   padding: 6px 14px;

//   font-weight: 500;
//   font-size: 16px;
//   line-height: 24px;
//   display: block;

//   color: #222222;
//   margin: 0;
// `
