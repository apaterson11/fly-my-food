import React from 'react';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import BarcodePopup from "../components/BarcodePopup"

import "./css/HomePage.css"


function HomePage () {
    return (
      <div className="screen-container">
        <Button variant="contained"><Link to="/map-view">Profile</Link></Button>
        <Button variant="contained">Help</Button>
        <Button variant="contained"><Link to="/barcode-input-view">Scan</Link></Button>
        <Button variant="contained">Quiz</Button>
        <Button variant="contained">History</Button>
      </div>
    );
}


export default HomePage;