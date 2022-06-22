import React from 'react';
import { Container, NameContainer } from '../styles/Card.styled';

const Card = (props) => {
  return (
    <Container>
      <div>
        <img
          src={`https://flagcdn.com/160x120/${props.code}.png`}
          alt="country"
        />
      </div>
      <NameContainer>
        <span>{props.country}</span>
      </NameContainer>
    </Container>
  );
};

export default Card;
