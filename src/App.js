import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Dashboard from './components/Dashboard'

function App() {
  const [currentPage, setCurrentPage] = useState('hello')
  function toggleScreen(currentPage){
    if (currentPage === 'hello') {
      setCurrentPage('dashboard')
    }
    if (currentPage === 'dashboard') {
      setCurrentPage('hello')
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { currentPage === 'hello' && <Hello /> }
        { currentPage === 'dashboard' && <Dashboard /> }
        <button onClick={() => toggleScreen(currentPage)}>Toggle Screen</button>
      </header>
    </div>
  );
}

export default App;
