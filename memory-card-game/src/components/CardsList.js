import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';
import { List } from '../styles/CardsList.styled';

const randomNumbers = (length) => {
  const numbs = [];
  let numb = Math.floor(Math.random() * 243);
  for (let i = 0; i < length; i++) {
    while (numbs.includes(numb)) {
      numb = Math.floor(Math.random() * 243);
    }
    numbs.push(numb);
  }
  return numbs;
};

const CardsList = () => {
  const [countries, setCountries] = useState([]);
  const shouldLog = useRef(true);

  useEffect(() => {
    const countriesData = async () => {
      const response = await fetch('data.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const info = await response.json();

      const details = info.map((country) => ({
        country: country.name,
        code: country.code.toLowerCase(),
      }));

      const data = randomNumbers(5).map((index) => details[index]);
      setCountries((prev) => [...prev, ...data]);
    };

    if (shouldLog.current) {
      shouldLog.current = false;
      try {
        countriesData();
      } catch {
        throw new Error('Something went wrong');
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <List>
      {countries.map((country) => (
        <li key={country.code}>
          {country.code && country.country && (
            <Card code={country.code} country={country.country} />
          )}
        </li>
      ))}
    </List>
  );
};

export default CardsList;
