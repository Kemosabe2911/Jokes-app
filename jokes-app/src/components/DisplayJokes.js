import React from 'react'

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
            <h1>Hello</h1>
        <ul>
            {items.map((data) =>{
                <li>{data}</li>
            })}
            <li>Hello</li>
        </ul>
        </div>
    )
}

export default DisplayJokes