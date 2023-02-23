import React from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";

const MealItem = ({ item }) => {
  return (
    <StyledLi key={item.id}>
      <StyledInfoCard>
        <Title>{item.text}</Title>
        <Description>{item.description}</Description>
        <Price>{item.price} сом</Price>
      </StyledInfoCard>
      <MealItemForm id={item.id} text={item.text} price={item.price} />
    </StyledLi>
  );
};

export default MealItem;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0625rem solid #d6d6d6;

  :last-child {
    border-bottom: none;
  }
`;

const StyledInfoCard = styled.div`
  margin-bottom: 1.25rem;
`;

const Title = styled.h4`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.6875rem;
  margin-bottom: 0;
`;

const Description = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
`;

const Price = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: #35b8be;
`;
