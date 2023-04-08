import React from 'react'
import '../App.css';

const DisplayJokes = ({result}) =>{
    //Intialize jokes,items
    var jokes=[];
    var items=[];

    {
        //map result data and enter it into jokes
        result.map(res => jokes.push(res));
    }
    console.log(jokes);
    for( var i=0; i< jokes.length;i++){
        //Add new jokes to the items to display as final result
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