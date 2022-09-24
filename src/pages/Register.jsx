import styled from "styled-components";
import { mobile } from "../responsive";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { isEmailExist, signUp } from "../Services/auth";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const initialValue = {
  firstName:"",
  lastName:"",
  username:"",
  email: "",
  password: "",
  confirmPassword:""
};

const Register = () => {
  
  const [formData, setFormData] = useState(initialValue);
  let navigate = useNavigate();

  function handleData() {
    if (isEmailExist(formData.email)) {
      alert("email already exist !");
      return;
    }
    signUp(formData)
    navigate(`/dashboard`);
  }

  const inputChangeHandler = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData((pre) => {
      return { ...pre, [name]: value };
    });

  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            type="text"
            placeholder="first name"
            name="firstName"
            id="firstName"
            onChange={inputChangeHandler}
          />
          <Input
            type="text"
            placeholder="last name"
            name="lastName"
            id="lastName"
            onChange={inputChangeHandler}
          />
          <Input
            text="text"
            placeholder="username"
            name="username"
            id="username"
            onChange={inputChangeHandler}
          />
          <Input 
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={inputChangeHandler}
           />
          <Input 
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          autoComplete="false"
          onChange={inputChangeHandler}
           />
          <Input 
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="confirm password"
          autoComplete="false"
          onChange={inputChangeHandler}
           />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
