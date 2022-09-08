import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { ResultsContainer } from './components/ResultsContainer/ResultsContainer';
import { AsideContainer } from './components/AsideContainer/AsideContainer';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="main">
        <ResultsContainer />
        <AsideContainer />
      </main>
    </div>
  );
}

export default App;
