import React from 'react';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

import BarcodePopup from "../components/BarcodePopup"
import HelpPage from "../pages/HelpPage"
import worldIcon from "../images/world_icon.png"

import "./css/HomePage.css"


function HomePage () {
    return (
      <div className="screen-container">
        <div className="inline-container">
          <div className="inline-element">
            <Button variant="contained"><Link to="/map-view">Profile</Link></Button>
            <Button variant="contained">History</Button>
          </div>
          <div className="inline-element">
            <div className="element-wrapper">
              <img src={worldIcon} alt="World" width="300" height="300" />
              <Button variant="contained"><Link to="/barcode-input-view">Scan</Link></Button>
            </div>
          </div>
          <div className="inline-element">
            <Button variant="contained">Quiz</Button>
            <Popup
              trigger={() => (<Button variant="contained">Help</Button>)}
              position="bottom right"
              closeOnDocumentClick
            >
              <HelpPage />
            </Popup>
          </div>
        </div>
      </div>
    );
}


export default HomePage;