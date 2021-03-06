import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15%;

  & > div {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  & > div::after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #cef;
    border-color: #cef transparent #cef transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
