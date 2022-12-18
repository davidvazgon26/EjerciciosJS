import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Componentes
import AppFormWithUseRef from './AppFormWithUseRef'
import AppConsumirApi from './AppConsumirApi'
import AppConsumirApiGraphQL from './AppConsumirApiGraphQL'
import AppRenderDinamico from './AppRenderDinamico' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App/>}/>
  <Route path="/api" element={<AppConsumirApi/>}/>
  <Route path="/form" element={<AppFormWithUseRef/>}/>
  <Route path="/graph" element={<AppConsumirApiGraphQL/>}/>
  <Route path="/dinamico" element={<AppRenderDinamico/>}/>
  </Routes>
    <App />
  </BrowserRouter>
);


