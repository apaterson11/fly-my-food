import React from "react";
import BarcodeScanner from './BarcodeScanner';

require("./css/BarcodePopup.css");

// for adding layers
export default class BarcodePopup extends React.Component {
  state = {
  };

  render() {

    return (
      <div className="barcodePopup">
        <BarcodeScanner width={80} height={80}/>
      </div>
    );
  }
}
