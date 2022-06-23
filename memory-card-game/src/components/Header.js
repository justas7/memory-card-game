import React from 'react';
import { StyledHeader } from '../styles/Header.styled';

const Header = (props) => {
  return (
    <StyledHeader>
      <div>Current Score: {props.currentScore} </div>
      <div>High score: {props.highScore}</div>
    </StyledHeader>
  );
};

export default Header;
