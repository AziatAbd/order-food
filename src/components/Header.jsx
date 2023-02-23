import Button from "./UI/Button";
import React, { useState } from "react";
import styled from "styled-components";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import BasicModal from "./UI/modal/MuiModal";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <>
      <Container>
        <Logo>OrderFood</Logo>
        <div style={{ marginRight: "4rem" }}>
          <Button onClick={handleOpen}>
            <ShoppingCartCheckoutIcon />
            Your cart
          </Button>
        </div>
      </Container>
      <BasicModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;

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
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
  margin-left: 5rem;
`;
