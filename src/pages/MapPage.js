import React from 'react';
import MapView from "../components/MapView"

function MapPage () {
    return (
      <div className="screen-container">
          <div className="scanner-container">
            <MapView/>
          </div>
      </div>
    );
}


export default MapPage;