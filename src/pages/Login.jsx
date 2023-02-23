import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginAction } from "../store/loginSlice";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputChangeHandler = (name) => {
    return (event) => {
      setFormState((prevState) => ({
        ...prevState,
        [name]: event.target.value,
      }));
    };
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formState.email.includes("@") && formState.password.length > 4) {
      dispatch(loginAction.login(formState.email));
    }
    navigate("/order-food");
  };

  return (
    <InputContiner>
      <Input
        inputType={"email"}
        label={"email"}
        onChange={inputChangeHandler("email")}
        value={formState.email}
      />
      <Input
        inputType={"password"}
        label={"password"}
        onChange={inputChangeHandler("password")}
        value={formState.password}
      />
      <ContainerButton>
        <Button onClick={submitHandler}>Login</Button>
      </ContainerButton>
    </InputContiner>
  );
};

export default Login;

const InputContiner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  border: 1px solid black;
  width: 400px;
  height: 200px;
  margin: auto;
  padding: 20px;
  margin-top: 200px;
  /* padding: 50px 20px; */
  border-radius: 10px;
  background-color: #c1e9f0;

  border: none;
`;
const ContainerButton = styled.div`
  margin-left: 60px;
`;
