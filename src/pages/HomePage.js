import React from 'react';
import BarcodeScanner from "../components/BarcodeScanner"

import "./css/HomePage.css"


function HomePage () {
    return (
      <div className="screen-container">
          <div className="heading">Scan your Barcode</div>
          <div className="scanner-container">
            <BarcodeScanner/>
          </div>
      </div>
    );
}


export default HomePage;