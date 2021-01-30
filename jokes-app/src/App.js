import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import DisplayJokes from './components/DisplayJokes'

function App() {
  const [result,setResult] = useState([]);

  const getrandomJokes = () =>{
    let temp =[];
    for(let i=1; i<=10; i++){
      axios.get(`https://api.chucknorris.io/jokes/random`)
      .then((res) =>{
        let data = res.data.value;
        temp.push(data);
      })
      console.log('Hello');
    }
    console.log(temp);
    setResult([...result,temp]);
    console.log(result);
  }

  return (
    <div className="App">
      <header className="App-header">
        Jokes App
      </header>
      <div className="button">
        <button className="btn" onClick={getrandomJokes}>Get Jokes</button>
        <div className="list">
          <DisplayJokes result={result} />
        </div>
      </div>
      <div className="theme-switch-wrapper">
        <label className="theme-switch-handler">
          <div className="switch-path">
            <div className="switch-handle">
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default App;
