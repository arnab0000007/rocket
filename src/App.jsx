import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rockets from './components/Rockets/Rockets';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div className="App">
      <Filter />
      <Rockets />
    </div>
  );
}

export default App;
