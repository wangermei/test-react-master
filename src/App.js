import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">欢迎来到菜鸟教程</h2>
        </header>
        <p className="App-intro">
         你可以在app.js中修改
        </p>
      </div>
    );
  }
}

export default App;
