import React from 'react';
import BarcodeScanner from "../components/BarcodeScanner";

function BarcodeScannerPage () {
    return (
      <div className="screen-container">
          <div className="scanner-container">
            <BarcodeScanner/>
          </div>
      </div>
    );
}

export default BarcodeScannerPage;