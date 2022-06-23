import GlobalStyle from './styles/GlobalStyle';
import React, { useRef, useState, useEffect } from 'react';
import CardsList from './components/CardsList';
import {
  getCountriesData,
  randomNumbers,
  setCards,
  setNewHighScore,
  shuffle,
} from './utils/utils';
import Header from './components/Header';

function App() {
  const [countries, setCountries] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [guesses, setGuesses] = useState([]);
  /* Number of cards to display */
  const [deckSize, setDeckSize] = useState(5);

  const cardClickHandler = (guess) => {
    setCurrentScore(currentScore + 1);
    setNewHighScore(currentScore + 1, highScore, setHighScore);
    setGuesses((prev) => [...prev, guess]);

    if (
      (currentScore + 1) % 5 === 0 &&
      currentScore + 1 > 0 &&
      currentScore + 1 < 30
    ) {
      setDeckSize(deckSize + 5);
    }

    setCountries(shuffle(countries, deckSize));
  };

  // const resetScore = () => {
  //   setCurrentScore(0);
  // };

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      try {
        (async () => {
          const data = await getCountriesData();
          const numbers = randomNumbers(30, 242);
          setCards(data, setCountries, numbers);
        })();
      } catch {
        throw new Error('Something went wrong');
      }
    }
  }, [countries, currentScore]);

  const filteredCountries = countries.filter((val, i) => i < deckSize);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header currentScore={currentScore} highScore={highScore} />
        <CardsList
          onCardClick={cardClickHandler}
          countries={filteredCountries}
          deckSize={deckSize}
        />
      </div>
    </>
  );
}

export default App;
