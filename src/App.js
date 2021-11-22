import React, { Component } from 'react';
import './App.css';
import HomePage from "./pages/HomePage"
import MapView from "./components/MapView"


class App extends Component {
  render() {
    return (
      <div className="App">
        <MapView/>
      </div>
    );
  }
}

export default App;