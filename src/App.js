import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from 'react-helmet'

import './App.css';
import BarcodeScannerPage from './pages/BarcodeReaderPage';
import HomePage from "./pages/HomePage"
import MapPage from './pages/MapPage';


class App extends Component {
  render() {
    return (
      <>
      <Helmet><title>Fly My Food</title></Helmet>
      <div className="router-container">
      <Router>
        <div className="main-body">
          <Routes>
            <Route
              exact
              path="/"
              element={<HomePage />}
            />
            <Route path="/barcode-input-view" element={<BarcodeScannerPage />} /> 
            <Route path="/map-view" element={<MapPage />} />    
          </Routes>
        </div>
      </Router>
    </div>
    </>
    );
  }
}

export default App;