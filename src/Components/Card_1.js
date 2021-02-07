import React from 'react'
import "./sidebar.css"

function Card_1(props){
    return(
        <div className ="card__1 col-lg-5 text-center">
            <img src= {props.img} alt="github" className="img-thumbnail"></img>
            <div>
                <div className="card__1_title">{props.title}</div>
            </div>
        </div>
    )
}

export default Card_1