import React from 'react'

const DisplayJokes = ({result}) =>{
    const jokes=[];
    {
        result.map(res => jokes.push(res));
    }
    console.log(jokes)
    return(
        <div className="output">
            <h1>Hello</h1>
        <ul>
            {jokes.map( (joke) =>{
                joke.map((data) =>{
                    <li>{data}</li>
                })
            })}
        </ul>
        </div>
    )
}

export default DisplayJokes