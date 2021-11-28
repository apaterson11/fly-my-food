import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from 'react-helmet'

import './App.css';
import BarcodeScannerPage from './pages/BarcodeReaderPage';
import HomePage from "./pages/HomePage"
import MapPage from './pages/MapPage';
import LeaderBoard from "./pages/LeaderBoard"
import Quiz from "./pages/Quiz"
import AfterQuiz from "./pages/AfterQuiz"


class App extends Component {
  render() {
    return (
      <>
        <Helmet><title>Fly Your Food</title></Helmet>
        <div className="router-container">
        <div className="heading">
          <h1 position="center">Fly Your Food</h1>
        </div>
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
              <Route path="/quiz" element={<Quiz/>} />
              <Route path="/quizscore" element={<AfterQuiz/>} />
            </Routes>
          </div>
        </Router>
    </div>
    </>
    );
  }
}

export default App;