import React from "react";
import Header from "./Header";
import Meals from "./meals/Meals";
import Summary from "./Summary";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Summary />
      <Meals />
    </>
  );
};

export default MainLayout;
