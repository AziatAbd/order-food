import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Button from "../UI/Button";
import AddIcon from "@mui/icons-material/Add";

const MealItemForm = ({ id, text, price }) => {
  return (
    <StyledForm>
      <Container>
        <StyledLabel htmlFor={id}>Amount</StyledLabel>
        <StyledText id={id} type="number" size="small" />
      </Container>
      <Button>
        <AddIcon />
        Add
      </Button>
    </StyledForm>
  );
};

export default MealItemForm;

const StyledText = styled(TextField)(() => ({
  width: " 3.75rem",
  height: "2rem",
  outline: "none",
  borderRadius: "6px",
  fontWeight: "500",
  fontSize: "16px",
}));

const StyledForm = styled("form")(() => ({
  display: " flex",
  flexDirection: " column",
  alignItems: "flex-end",
}));

const Container = styled("div")(() => ({
  marginBottom: "15px",
}));

const StyledLabel = styled("label")(() => ({
  fontWeight: "600",
  fontSize: "1.125rem",
  lineHeight: "1.6875rem",
  margin: "0 1.25rem 0 0",
}));
