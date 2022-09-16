import { useEffect, useState } from "react";

//components
import CardCat from "./CardCat";


const CatsList = () => {
    
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        return callAPI
     }, [])
    
    const callAPI = () => {
        fetch('https://catfact.ninja/breeds')
        .then(res => res.json())
        .then(data =>setCats(data.data))
        
    }
    // console.log(cats.length)
    
    

    return(
        <>
            <h3>Cats List: </h3>
            {
                cats.map((cat, index) =>{
                    return (<CardCat cat={cat} key={index}/>)
                })
            }
        </>
    );
    
}

export default CatsList;