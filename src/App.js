import React from 'react';

import './App.css';
import Home from './container/home';
import Header from './component/Header';
import Show from './component/Slide';




function App() {
  return (
    <div className="App1">
     <Header/>
     <Show/>
     
      <Home/>
      
    </div>
  );
}

export default App;
