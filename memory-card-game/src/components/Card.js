import { Container, NameContainer } from '../styles/Card.styled';

const Card = (props) => {
  const handler = (e) => {
    if (e.target.alt) {
      props.onCardClick(e.target.alt);
    }
  };

  return (
    <Container onClick={handler}>
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
