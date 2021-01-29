import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [result,setResult] = useState([]);
  let temp =[];

  const getTenJokes = () =>{
    temp=[];
    for(let i=1; i<10; i++){
      getrandomJokes();
      console.log('Hello');
    }
    setResult([...result,temp]);
    console.log(result);
  }

  const getrandomJokes = () =>{
    axios.get(`https://api.chucknorris.io/jokes/random`)
    .then((res) =>{
      let data = res.data.value;
      temp.push(data);
    })
    //console.log(result);
  }

  return (
    <div className="App">
      <header className="App-header">
        Jokes App
      </header>
      <div className="button">
        <button className="btn" onClick={getTenJokes}>Get Jokes</button>
      </div>
    </div>
  );
}

export default App;
