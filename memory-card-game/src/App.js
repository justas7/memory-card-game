import GlobalStyle from './styles/GlobalStyle';
import React from 'react';
import CardsList from './components/CardsList';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <CardsList />
      </div>
    </>
  );
}

export default App;
