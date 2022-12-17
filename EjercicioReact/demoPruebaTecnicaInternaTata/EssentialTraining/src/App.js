import './App.css';
import {useState, useEffect, useReducer} from "react"
import AppFormWithUseRef from './AppFormWithUseRef'

function App() {
  const [emotion, setEmotion] = useState("happy");

  
  useEffect(()=>{
    console.log(`It's ${emotion} around here!`);
  },[emotion])
  
  console.log(emotion);

  const [checked, setChecked] = useState(false);

  const [checkedreducer, setCheckedreducer] = useReducer((checkedreducer)=>!checkedreducer, false)

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={()=> setEmotion("sad")}>Sad</button>
      <button onClick={()=> setEmotion("excited")}>excited</button>
      <button onClick={()=> setEmotion("hungry")}>hungry</button>
      <button onClick={()=> window.location.reload()}>reiniciar</button>
      <div>
      <h3>Checked con useState</h3>
        <input
          type="checkbox"
          value={checked}
          onChange={()=>
            setChecked((checked)=>!checked)}
        />
        <label>
          {checked? "checked" : "not checked"}
        </label>
      </div>
      {/* *********************** */}
      <div>
      <h3>Checked con useReducer</h3>
        <input
          type="checkbox"
          value={checkedreducer}
          onChange={setCheckedreducer}
        />
        <label>
          {checkedreducer? "checked" : "not checked"}
        </label>
      </div>
    <AppFormWithUseRef/>

    </div>
  );
}

export default App;
