import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import styledComponent from 'styled-components'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import Button from '../Button'

export default function BasicModal({ open, setOpen }) {
  const { meals } = useSelector((state) => state.meal)

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
            {meals.map((item) => (
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
            ))}
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

const PriceAndAmountContainer = styledComponent.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 153px;
  margin: 0;
`
const CounterContainer = styledComponent.div`
  > button {
    margin-right: 14px;
  }
`
const Content = styledComponent.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  margin-bottom: 20px;
  padding-bottom: 20px;

  :last-child {
    border-bottom: none;
  }
  
`
const StyledTilte = styledComponent.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin: 0 0 12px;
`

const Container = styledComponent.div`
  padding: 24px 0;
  border-bottom: 1px solid black;
  width: 100%;
  margin-bottom: 30px;
  max-height: 190px;
  overflow: auto;

`

const StyledPrice = styledComponent.p`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;

  color: #35b8be
`
const AmountStyle = styledComponent.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  padding: 6px 14px;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: block;

  color: #222222;
  margin: 0;
`
