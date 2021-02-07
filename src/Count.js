import React from 'react';
import { Button } from '@material-ui/core';

let count = 0;

const color = {
    key : "1",
    color : "white",
    textAlign : "center",
    backgroundColor : "dodgerBlue",
    padding : "10px",
}
function inc(){
    console.log("Clicked"+count)
    count = count + 1
}
function Count(props){
    return(
        [
            <div style={color} className="container">
                <h2>Count</h2>
                <h3> {count} </h3>
                <Button onClick = {inc} variant ="contained" >Press {count} </Button>
            </div>
        ]
    )
}
export default Count