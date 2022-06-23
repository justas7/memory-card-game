import Card from './Card';
import { List } from '../styles/CardsList.styled';

const CardsList = (props) => {
  return (
    <List>
      {props.countries
        .filter((val, i, arr) => arr.indexOf(val) < props.deckSize)
        .map((country) => (
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
