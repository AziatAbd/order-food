import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import MealItem from './MealItem'

function Meals() {
  const { meals } = useSelector((state) => state.meal)
  console.log(meals)

  return (
    <Card>
      <StyledUl>
        {meals.map((item) => (
          <MealItem key={item.id} item={item} />
        ))}
      </StyledUl>
    </Card>
  )
}

export default Meals

const Card = styled.div`
  background: #fff;
  border-radius: 1rem;
  width: 64.9375rem;
  margin: 160px auto;
`

const StyledUl = styled.ul`
  margin-top: 8rem;
  list-style: none;
  padding: 20px 40px;
`
