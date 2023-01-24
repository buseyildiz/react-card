import React from 'react'
import './Card.css'
import './App.css'

function Card(props) {
  return (
    <div className='card'>
        <div className='cardBody'>
            <img src={props.img}/>
            <div className='about'>
                <h2 className='cardTitle'>{props.title}</h2>
                <br></br>
                <p className='cardDescription'>{props.description}</p>
            </div>
        
        </div>
    </div>
  )
}

export default Card