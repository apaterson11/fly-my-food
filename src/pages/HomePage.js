import React from 'react';
import BarcodePopup from "../components/BarcodePopup"

import "./css/HomePage.css"


function HomePage () {
    return (
      <div className="screen-container">
          <div className="scanner-container">
            <BarcodePopup/>
          </div>
      </div>
    );
}


export default HomePage;