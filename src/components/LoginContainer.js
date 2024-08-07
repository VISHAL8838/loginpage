import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Container = styled.div`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;

  & p {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
  }

  & span {
    font-size: 12px;
  }

  & a {
    color: #333;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;
    display: block; /* Ensure it takes up the full width of its container */
  }

  & button {
    background-color: #512da8;
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
  }

  & button.hidden {
    background-color: transparent;
    border-color: #fff;
  }

  & form {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
  }

  & input {
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
  }
`;

const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  &.sign-in {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  &.sign-up {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
    transition: all 0.5s;
  }

  &.active.sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: move 0.6s;
  }
`;

const SocialIcons = styled.div`
  margin: 20px 0;

  & a {
    border: 1px solid #ccc;
    border-radius: 20%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    width: 40px;
    color: #ccc;
    height: 40px;
    transition: all 0.5s;
  }
`;

const ToggleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;

  &.active {
    transform: translateX(-100%);
    border-radius: 0 150px 100px 0;
  }
`;

const Toggle = styled.div`
  background-color: #512da8;
  height: 100%;
  background: linear-gradient(to right, #5c6bc0, #512da8);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;

  &.active {
    transform: translateX(50%);
  }
`;

const TogglePanel = styled.div`
  position: absolute;
  margin-left: -30px;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transition: all 0.6s ease-in-out;

  &.toggle-left {
    transform: translateX(-200%);
  }

  &.toggle-right {
    right: 0;
    transform: translateX(0);
  }

  &.active.toggle-left {
    transform: translateX(0);
  }

  &.active.toggle-right {
    transform: translateX(200%);
  }

  .text-button {
    background: none;
    border: none;
    color: #007bff; /* Change this to your desired text color */
    font-size: 16px;
    cursor: pointer;
    text-decoration: underline;
    padding: 0;
    margin: 0;
    font-family: inherit;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const LoginContainer = () => {
  const [isActive, setIsActive] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);

  const handleForgotPasswordClick = () => {
    setIsForgetPassword(true);
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsForgetPassword(false);
    setIsActive(false);
  };

  const handleGoToSignIn = () => {
    setIsForgetPassword(false);
    setIsActive(false); // Ensure Sign In form is shown
  };

  return (
    <Container className={isActive ? 'active' : ''} id="container">
      <FormContainer className={`sign-up ${isActive ? 'active' : ''}`}>
        <form>
          <h1>Create Account</h1>
          <SocialIcons>
            <a href="#" className="icon"><FaGooglePlusG /></a>
            <a href="#" className="icon"><FaFacebookF /></a>
            <a href="#" className="icon"><FaGithub /></a>
            <a href="#" className="icon"><FaLinkedinIn /></a>
          </SocialIcons>
          <span>or use your email for registration</span>
          <input type="email" placeholder="Email" />
          
          <ButtonContainer>
            <a href="#" onClick={handleGoToSignIn} className="text-button">→ LOGIN ←</a>
            <button type="submit">Sent Request</button>
            
          </ButtonContainer>
        </form>
      </FormContainer>
      <FormContainer className={`sign-in ${isForgetPassword ? 'active' : ''}`}>
        <form>
          <h1>{isForgetPassword ? 'Reset Password' : 'Sign In'}</h1>
          {!isForgetPassword && (
            <>
              <SocialIcons>
                <a href="#" className="icon" disable><FaGooglePlusG /></a>
                <a href="#" className="icon" disable><FaFacebookF /></a>
                <a href="#" className="icon" disable><FaGithub /></a>
                <a href="#" className="icon" disable><FaLinkedinIn /></a>
              </SocialIcons>
              <span>or use your email account</span>
            </>
          )}
          <input type="email" placeholder="Email" />
          {!isForgetPassword && <input type="password" placeholder="Password" />}
          {!isForgetPassword ? (
            <a href="#" onClick={handleForgotPasswordClick}>→ Forget Your Password? ←</a>
          ) : (
            <>
              <a href="#" onClick={handleLoginClick}>← Back to Sign In →</a>
              <button onClick={handleLoginClick}>OK</button>
            </>
          )}
          <button>{isForgetPassword ? 'Reset Password' : 'Login'}</button>
        </form>
      </FormContainer>
      <ToggleContainer className={isActive ? 'active' : ''}>
        <Toggle className={isActive ? 'active' : ''}>
          <TogglePanel className={`toggle-left ${isActive ? 'active' : ''}`}>
            <h1>FORGET PASSWORD</h1>
          </TogglePanel>
          <TogglePanel className={`toggle-right ${isActive ? 'active' : ''}`}>
            {isForgetPassword ? (
              <>
                <input type="email" placeholder="Email" />
                <button onClick={handleLoginClick}>Login</button>
              </>
            ) : (
              <h1>WELCOME</h1>
            )}
          </TogglePanel>
        </Toggle>
      </ToggleContainer>
    </Container>
  );
};

export default LoginContainer;
