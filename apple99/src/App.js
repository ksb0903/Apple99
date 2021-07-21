import React from 'react';
import './App.css';
import './Component.css';
import Header from './Header';
import Router from './Router';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Router></Router>
      </div>
    );
  }
}

export default App;