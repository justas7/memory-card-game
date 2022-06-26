import GlobalStyle from './styles/GlobalStyle';
import React, { useRef, useState, useEffect } from 'react';
import CardsList from './components/CardsList';
import Spinner from './components/Spinner';
import {
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
  const [deckSize, setDeckSize] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      (async () => {
        try {
          const response = await fetch('data.json');

          if (response.ok) {
            const data = await response.json();
            const numbers = randomNumbers(30, 242);
            setCountries(setCards(data, numbers));
          } else {
            throw response;
          }
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [countries]);

  const cardClickHandler = (guess) => {
    if (guesses.includes(guess)) {
      resetScore();
      return;
    }
    setCurrentScore(currentScore + 1);
    setNewHighScore(currentScore + 1, highScore, setHighScore);
    setGuesses((prev) => [...prev, guess]);

    if (guesses.length + 1 === deckSize) {
      setDeckSize(deckSize + 5);
      setGuesses([]);
    }
    setCountries(shuffle(countries, deckSize));
  };

  const resetScore = () => {
    setCurrentScore(0);
    setDeckSize(5);
    setCountries(shuffle(countries, 30));
    setGuesses([]);
  };

  const filteredCountries = countries.filter((val, i) => i < deckSize);

  if (error) throw error;

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header currentScore={currentScore} highScore={highScore} />
        {loading && <Spinner />}
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
