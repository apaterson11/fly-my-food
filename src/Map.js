import React from 'react'
import Popup from "reactjs-popup";
import { GoogleMap, Wrapper, InfoWindow, Marker, useLoadScript } from "@react-google-maps/api";
import BarcodePopup from './BarcodePopup';

require("./BarcodePopup.css");

const glasgow = { lat: 55.8642, lng: -4.2518 };

const mapContainerStyle = {
    width: '100wv',
    height: '100vh',
};

// let user_location = {lat: 0, lng: 0}; 
let user_location = glasgow

export default function Map() {
    // !!! currently broken, will implement later !!!
    // async function getUserLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //           (position) => {
    //             const pos = {
    //               lat: position.coords.latitude,
    //               lng: position.coords.longitude,
    //             };
    //             user_location = pos
    //           }
    //         );
    //       } else {
    //         // Browser doesn't support Geolocation
    //         user_location = {glasgow}
    //     }
    //     return user_location
    // }

    // await getUserLocation();

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyAYtDG4yYGDrPP5zZF2OqYBwQ4pA8-w6Wk',
    })

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <div>
            <GoogleMap 
            mapContainerStyle={mapContainerStyle}
            zoom={4}
            center={user_location}>
                <Marker
                id = "user_pos"
                position = {user_location}
                >    
                </Marker>
                <Popup
                    trigger={() => (
                        <button
                        className="barcode"
                        >
                        Scan Item
                        </button>
                    )}
                    position="top left"
                    closeOnDocumentClick
                    >
                    <span>
                        <BarcodePopup></BarcodePopup>
                    </span>
                </Popup>
                
            </GoogleMap>
        </div>
    );
}
