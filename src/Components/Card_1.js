import React from 'react'
import "./sidebar.css"

function Card_1(props){
    return(
        <div className='py-1 px-2 card__1'>
            <div className='card__1_title'>
                {props.title}
            </div>
        </div>
    )
}

export default Card_1