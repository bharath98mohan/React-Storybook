import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header className='header'>Hello !!!</Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Input size='medium' placeholder='Medium size' /><br />
          <a href='https://reactjs.org'><Button variant='success'>Click Me!</Button></a>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
