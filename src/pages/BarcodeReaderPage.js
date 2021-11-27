import React from 'react';
import BarcodePopup from "../components/BarcodePopup";

function BarcodeScannerPage () {
    return (
      <div className="screen-container">
          <div className="scanner-container">
            <BarcodePopup boolMap={false}/>
          </div>
      </div>
    );
}

export default BarcodeScannerPage;