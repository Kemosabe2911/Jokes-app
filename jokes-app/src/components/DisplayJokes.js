import React from 'react'
import '../App.css';

const DisplayJokes = ({result}) =>{
    var jokes=[];
    var items=[];

    {
        result.map(res => jokes.push(res));
    }
    console.log(jokes);
    for( var i=0; i< jokes.length;i++){
        items= items.concat(jokes[i]);
    }
    console.log(items);
    return(
        <div className="output">
            <ul>
                {items.map((data) =>(
                    <li key={data}>{data}</li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayJokes