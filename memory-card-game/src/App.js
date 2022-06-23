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
    setCountries((prev) => [...shuffle(prev, deckSize)]);
  };

  const resetScore = () => {
    setCurrentScore(0);
  };

  const guessHandler = (guess) => {
    setGuesses((prev) => [...prev, guess]);
  };

  const deckSizeHandler = () => {
    setDeckSize((prev) => prev + 5);
  };

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

  return (
    <>
      {console.log(guesses)}
      <GlobalStyle />
      <div className="App">
        <Header currentScore={currentScore} highScore={highScore} />
        <CardsList
          resetScore={resetScore}
          addGuess={guessHandler}
          onCardClick={cardClickHandler}
          setDeckSize={deckSizeHandler}
          countries={countries}
          deckSize={deckSize}
        />
      </div>
    </>
  );
}

export default App;
