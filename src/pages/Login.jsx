import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Button from '../components/Ui/Button'
import Input from '../components/Ui/Input'
import { loginAction } from '../store/loginSlice'

const Login = () => {
  const dispatch = useDispatch()
  const [formState,setFormState] = useState({
    email:"",
    password: '',
  })
  console.log(formState);
  
  const inputChangeHandler = (name) => {
    return (event) => {
      setFormState(prevState => ({...prevState, [name]: event.target.value}))
  
    }
  }
    const submitHandler = (event) => {
      event.preventDefault()
    if(formState.email === 'test@gmail.com' && formState.password === "123123"){
      dispatch(loginAction.login(formState.email))
    }
    }
  return (
    <InputContiner>
      <Input inputType={'email'} label={'email'} onChange={inputChangeHandler('email')} value={formState.email}/>
      <Input inputType={'password'} label={'password'} onChange={inputChangeHandler("password")} value={formState.password}/>
      <ContainerButton>
      <Button onClick={submitHandler}>Login</Button>

      </ContainerButton>
    </InputContiner>
  )
}

export default Login


const InputContiner = styled.div`
 display: grid;
  /* flex-direction: column; */
  grid-template-columns: 1fr;
  gap: 20px;
  border: 1px solid black;
  width: 400px;
  height: 200px;
margin:auto;
padding:20px;
margin-top:200px;
border-radius: 10px;
background-color:gold;
border: none;
`
const ContainerButton = styled.div`
margin-left:110px;
`