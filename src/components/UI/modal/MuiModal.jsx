import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styledComponent from "styled-components";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "14px",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Open modal</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <StyledTilte>Ramen</StyledTilte>
            <Content>
              <PriceAndAmountContainer>
                <StyledPrice>$200</StyledPrice>
                <AmountStyle> x4</AmountStyle>
              </PriceAndAmountContainer>

              <CounterContainer>
                <button variant="outlined">-</button>
                <button variant="outlined">+</button>
              </CounterContainer>
            </Content>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
const PriceAndAmountContainer = styledComponent.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 153px;
  margin: 0;
`;
const CounterContainer = styledComponent.div`
  > button {
    margin-right: 14px;
  }
`;
const Content = styledComponent.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledTilte = styledComponent.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin: 0 0 12px;
`;

const Container = styledComponent.div`
  padding: 24px 0;
  border-bottom: 1px solid black;
  width: 100%;
  margin-bottom: 30px;
`;

const StyledPrice = styledComponent.p`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;

  color: #35b8be
`;
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
`;
