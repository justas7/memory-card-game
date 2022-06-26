export const randomNumbers = (length, maxNumb) => {
  const numbs = [];

  let numb = Math.floor(Math.random() * (maxNumb + 1));
  for (let i = 0; i < length; i++) {
    while (numbs.includes(numb)) {
      numb = Math.floor(Math.random() * (maxNumb + 1));
    }
    numbs.push(numb);
  }
  return numbs;
};

/* fetch coutry data from public/data.json. There are 243 countries*/
export const fetchCountries = async () => {
  const response = await fetch('data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const info = await response.json();
  return info;
};

export const setCards = (data, numbers) => {
  const details = data.map((country) => ({
    country: country.name,
    code: country.code.toLowerCase(),
  }));

  return numbers.map((index) => details[index]);
};

/* set high score depending on current score state */

export const setNewHighScore = (currentS, currentHS, fn) => {
  return currentS > currentHS ? fn(currentS) : currentHS;
};

export const shuffle = (countries, deckSize) => {
  const numbs = randomNumbers(deckSize, deckSize - 1);
  const newDeck = numbs.map((numb) => countries[numb]);
  const rest = countries.filter((val, i) => i > deckSize - 1);

  return rest ? [...newDeck, ...rest] : [...newDeck];
};
