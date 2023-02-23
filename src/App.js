import { Route, Routes, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/order-food" element={<MainLayout />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #F5FBFC;
  };

  *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
`;
