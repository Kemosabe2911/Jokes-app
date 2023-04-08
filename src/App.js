import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import DisplayJokes from './components/DisplayJokes'

function App() {
  //Initialize result, darkMode states
  const [result,setResult] = useState([]);
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  
  //Save in localstorage
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
    // return savedMode || false;
  }

  //function to get prefered color
  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  //fetch data from api 10 times
  const getrandomJokes = () =>{
    let temp =[];
    for(let i=1; i<=10; i++){
      axios.get(`https://api.chucknorris.io/jokes/random`)
      .then((res) =>{
        let data = res.data.value;
        temp.push(data);
      })
      //console.log('Hello');
    }
    console.log(temp);
    setResult([...result,temp]);
    console.log(result);
  }

  return (
    <div className= {darkMode ? "dark-mode" : "light-mode"} >
      <div className="App">
      <header className="App-header">
        Jokes App
      </header>
      <nav>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
          {/* <button onClick={() => setDarkMode(prevMode => !prevMode)}>
          Toggle
        </button> */}
        </div>
      </nav>
      <div className="button">
        <button className="btn" onClick={getrandomJokes}>Get Jokes</button>
        <div className="list">
          <DisplayJokes result={result} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
