import logo from './logo.svg';
import './App.css';

function App() {

  const arr = [
    {name: "David"},
    {name: "Luis"},
    {name: "Javier"}
  ];

  const arr2 = ["David", "Luis", "Carlos"]

  return (
    <div className="App">
      <ul>
        { arr2.map((item, index)=>{
          console.log(item)
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
