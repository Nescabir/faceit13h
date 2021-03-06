import React from 'react';
import './App.scss';
import RandomWords from './components/RandomWords';
import faceit from './logo.png';
import { version } from '../package.json';

function App() {
  return (
    <div className="App">
      <div className="title">
        <img src={faceit} alt=""/>
        <h1>FACEIT DE 13H <span className="version">v{version}</span></h1>
      </div>
      <RandomWords />
      <footer>
        <p>
          Développé par <a href="https://twitter.com/Kerecthar">NES</a> avec <span className="love">❤</span> pour <a href="https://dfuse.gg" target="_blank" rel="noreferrer">Dfuse.gg</a>.
        </p>
        <span className="source">
          <a href="https://github.com/Nescabir/faceit13h">GitHub Repo</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
