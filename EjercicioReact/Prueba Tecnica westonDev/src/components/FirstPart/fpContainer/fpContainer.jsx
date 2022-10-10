import React, { useState } from 'react';
import NumberContext from '../../context/numberContext';

//components
import Card from '../../Card'
import Button from '../../Button'

//css
import './fpContainer.css'



function FPContainer() {

    const [aleatorio, setAleatorio] = useState(0);
    const nameArray = ["Sam", "Kelly", "Alexander"]

    // const obj = {number:  [aleatorio, setAleatorio],
    // nombres: nameArray }

   
    return(
        <NumberContext.Provider value={[aleatorio, setAleatorio]}>
        <div className='cardsContainer'>
        {nameArray.map((el, index)=>{
             return <Card elemento={el} array={nameArray} key={index}/>
        })}
        <Button/>
        </div>
        </NumberContext.Provider>
    )
}



export default FPContainer