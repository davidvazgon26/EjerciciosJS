import { Routes, Route } from 'react-router-dom';
import './App.css';

//Components
import List from './components/list/List';
import Demo from './components/demo/demo';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List/>} />
        <Route path="/Demo" element={<Demo />} />
      </Routes>
    </div>
  );
}

export default App;
