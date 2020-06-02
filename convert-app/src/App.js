import React from 'react';
import logo from './logo.svg';
import Layout from './Layout'
import './App.css';
import 'antd/dist/antd.css';

// function App() {
  const App = () => {
  return (
    <div className="App">
      <Layout />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
