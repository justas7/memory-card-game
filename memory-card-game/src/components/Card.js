import React, { useEffect } from 'react';
import { Container, NameContainer } from '../styles/Card.styled';

const Card = (props) => {
  useEffect(() => {
    const list = document.querySelector(`img[alt="${props.code}"]`);

    const handler = (e) => {
      if (e.target.alt) {
        props.onCardClick(e.target.alt);
      }
    };
    list.addEventListener('click', handler);

    return () => {
      list.removeEventListener('click', handler);
    };
  }, [props]);

  return (
    <Container>
      <div>
        <img
          src={`https://flagcdn.com/160x120/${props.code}.png`}
          alt={props.code}
        />
      </div>
      <NameContainer>
        <span>{props.country}</span>
      </NameContainer>
    </Container>
  );
};

export default Card;
