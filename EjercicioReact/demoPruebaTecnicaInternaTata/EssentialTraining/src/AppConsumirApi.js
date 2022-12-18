import {useState, useEffect} from "react"



function GithubUser({name, location, avatar}){
  return(
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name}/>
    </div>
  )
}

function AppConsumirApi() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

useEffect(()=>{
  setLoading(true)
  fetch(
    `https://api.github.com/users/davidvazgon26`
  ).then((response)=> response.json())
  .then(setData)
  .then(()=>setLoading(false))
  .catch(setError);
}, []);

  // console.log(data)

  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.stringify(error)}</pre>;
  if(!data) return null;

  return (
    // <pre>{JSON.stringify(data, null, 2)}</pre>
   <>
     <GithubUser 
      name={data.name}
      location={data.location}
      avatar={data.avatar_url}
    />
   </>
  );
}


export default AppConsumirApi;
