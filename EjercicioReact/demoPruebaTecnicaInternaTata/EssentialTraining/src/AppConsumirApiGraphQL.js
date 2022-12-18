import {useState, useEffect} from "react"


// Ejercicio utilizando la api tipo GraphQL en la siguiente ruta : https://snowtooth.moonhighway.com/

const query = `
  query {
    allLifts {
      name
      elevationGain
      status
    }
  }
`;

const opts = {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({query})
}


function Lift({name, elevationGain, status, i}){
  return(
    <div key={i}>
      <h1>{name}</h1>
      <p>{elevationGain}</p>
      <p>{status}</p>
    </div>
  )
}

function AppConsumirApiGraphQL() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

useEffect(()=>{
  setLoading(true)
  fetch(
    `https://snowtooth.moonhighway.com/`, opts
  ).then((response)=> response.json())
  .then(setData)
  .then(()=>setLoading(false))
  .catch(setError);
}, []);

  console.log(data);

  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.stringify(error)}</pre>;
  if(!data) return null;

  return (
    // <pre>{JSON.stringify(data, null, 2)}</pre>
    <div>
      <h2>Consumo de API con GraphQL</h2>

      {data.data.allLifts.map((lift, i)=>(
      <Lift 
        key = {i}
        name={lift.name}
        elevationGain={lift.elevationGain}
          status={lift.status}
      />
       ))} 

    </div>
  );
}


export default AppConsumirApiGraphQL;
