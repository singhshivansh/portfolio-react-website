import React from 'react'
import "./Card.css"

function Card(){
    return(
    [
        <div className="card">
            <img src = "https://occ-0-2599-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeu5Oz4CGncoVEvCDhLelkyQc7H0KsaLyauqCprkOTTePn46kiFYRe1AUg5UkCp9ka7RTgyc8mKrSy7w9VFeQDokfmzy.jpg?r=077"></img>
            <h1>netflix Original Series</h1>
            <h3>DARK</h3>
            <a href ="https://www.netflix.com/in/title/80100172">
                <button>Watch now</button>
            </a>
        </div>,
    ]
    )
}
export default Card