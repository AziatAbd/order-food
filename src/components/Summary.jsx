import React from 'react'
import styled from 'styled-components'

const Summary = () => {
  return (
    <Container>
        <StyledImg src="https://media.cntraveler.com/photos/61e886f19580ae68b5219023/16:9/w_1920%2Cc_limit/Oji%2520Seichi%2520Toronto_Oji%2520Food-Food%2520Spread_Roberto%2520Caruso.jpg" alt="summary" />
    <Card>
        <StyledTitle>Food delivery service — convenient and always close at hand!</StyledTitle>
        <p>350 of the best restaurants in the city for every taste, delivery of food and alcohol from supermarkets and markets, medicines from pharmacies, personal courier service, anonymous delivery from a sex shop, it's all in your pocket</p>
    </Card>
    </Container>
  )
}

export default Summary

const StyledImg = styled.img`
    width: 100%;
    height: 540px;
`

const Card = styled.div`
    max-width: 52.375rem;
    background-color: #7ba1a3;
    padding: 36px 54px;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    position: relative;
    margin: -15rem auto;

    font-family: sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
`
const StyledTitle = styled.h2`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;

    color: #FFFFFF;
`
const Container = styled.div`
    height: 527px;
`