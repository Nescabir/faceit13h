
import React, { useState } from 'react';
import './RandomWords.scss';
const randomENWords = require('random-words');
const FRWords: string[] = require('an-array-of-french-words')

function RandomWords() {
  const [teamName, setTeamName] = useState("")
  const [lang, setLang] = useState("FR");

  function generate() {
    switch (lang) {
      case "FR":
        generateFR();
        break;
      case "EN":
        generateEN();
        break;
    }
  }

  function generateEN() {
    const words: string[] = randomENWords({exactly: 2, minLength: 4});
    for (let index = 0; index < words.length; index++) {
      words[index] = capitalizeFirstLetter(words[index]);
    }
    const res = words.join("")
    if (res.length <= 13) {
      setTeamName(res)
    } else {
      generateEN();
    }
  }

  function generateFR() {
    const words = FRWords.filter(word => word.length >= 2 && word.length <= 7);
    const firstWord = capitalizeFirstLetter(words[random()]);
    const secondWord = capitalizeFirstLetter(words[random()]);
    const res = firstWord+secondWord;

    if (res.length <= 13) {
      setTeamName(res)
    } else {
      generateFR();
    }
  }

  function random() {
    return Math.floor(Math.random() * 53142);
  }

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleLangChange(changeEvent: React.ChangeEvent<HTMLInputElement>) {
      setLang(changeEvent.target.value);
  }

  return (
    <div className="random-words">
      <button className="generate" onClick={generate}>Générer</button>
      <div className="inputs">
        <input type="text" name="teamname" id="teamname" value={teamName} placeholder="Clique sur `Générer` pour générer le nom de l'équipe" readOnly/>
        <input type="radio" name="lang" id="FR" value="FR" onChange={handleLangChange} defaultChecked/>
        <label htmlFor="FR" className="firstLabel">FR</label>
        <input type="radio" name="lang" id="EN" onChange={handleLangChange} value="EN" />
        <label htmlFor="EN" className="secondLabel">EN</label>
      </div>
    </div>
  );
}

export default RandomWords;
