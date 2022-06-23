import Card from './Card';
import { List } from '../styles/CardsList.styled';

const CardsList = (props) => {
  return (
    <List>
      {props.countries.map((country) => (
        <li key={country.code}>
          {country.code && country.country && (
            <Card
              onCardClick={props.onCardClick}
              code={country.code}
              country={country.country}
            />
          )}
        </li>
      ))}
    </List>
  );
};

export default CardsList;
