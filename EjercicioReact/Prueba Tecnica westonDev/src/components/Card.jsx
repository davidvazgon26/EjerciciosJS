import React, {useContext}  from 'react';
import NumberContext from "./context/numberContext";

//css
import './Card.css' 


function Card(props){
    const [aleatorio] = useContext(NumberContext)

    const arr = props.array.filter(item => item.length<=aleatorio)
    let result;


   if (aleatorio === 0) {
        result = ""
   }else if (arr.length === 0) {
        result = props.array[0]
   }else if (arr.length === 1) {
        result = arr[0];
   }else{

        for (let i = 0; i < arr.length-1; i++) {
                 let first = aleatorio - arr[i];       
                 let second = aleatorio - arr[i+1]; 
                 if (first === second) {
                    result = arr[i];
                 } else {
                    first<second?result = arr[i]: result=arr[i+1]
                 }      
        }

   }

   console.log(aleatorio)
   console.log(props.array)
   console.log(arr)

    return(
        <div className='cardContainer'>
            <div className={props.elemento===result?'card2':'card'}>{props.elemento}</div>
        </div>
    )
}

export default Card