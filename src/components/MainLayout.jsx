import React from 'react'
import Header from './Header'
import Meals from './meals/Meals'
import Summary from './Summary'

function MainLayout() {
  return (
    <>
      <Header />
      <Summary />
      <Meals />
    </>
  )
}

export default MainLayout
