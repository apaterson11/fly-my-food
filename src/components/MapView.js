import React, { useState, useRef, useEffect, useContext, Component, useLayoutEffect } from "react";
import Popup from "reactjs-popup";
import { GoogleMap, Marker, useLoadScript, Polyline } from "@react-google-maps/api";

import BarcodePopup from './BarcodePopup';

require("./css/BarcodePopup.css");

const glasgow = { lat: 55.8642, lng: -4.2518 };

const mapContainerStyle = {
    width: '100wv',
    height: '100vh',
};

// let user_location = {lat: 0, lng: 0}; 
let user_location = glasgow

export default function MapView() {
    const [icons, setIcons] = useState(
        [
            { icon: 
                {
                    path: window.google ? window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW : null, 
                    scale: 8, 
                    strokeColor: "#A6B7D7"
                }, 
                offset: "100%" 
            }
        ]
        );
    const [path, setPath] = useState([
        { lat: 56, lng: -5.3518 },
        { lat: 56.8642, lng: -5.3518 },
    ]);
    const mapRef = useRef()
    const polylineRef = useRef(Polyline)
    const [line, setLine] = useState(polylineRef)

    useLayoutEffect(() => {
        // console.log(window.google)
        if (window.google) {
            icons[0].icon.path = window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW;
            // setIcons(icons);
            animateCircle(line)
        }
    });
    

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

    // const path = [
    //     { lat: 56, lng: -5.3518 },
    //     { lat: 56.8642, lng: -5.3518 },
    // ]

    // Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals.

    // state is changing but not reflected in frontend
    function animateCircle(line) {
        console.log("function again")
        let count = 0;
        console.log(line);
            window.setInterval(() => {
                count = (count + 1) % 200;
                let x = line.current.props.icons;
                let y = line.current.props.path;
                console.log(icons)
                x[0].offset = count / 2 + "%";
                console.log(icons)
                y[0].lng = y[0].lng+1;
                // setIcons(x);
                // setPath(y);
                setLine(x);
            }, 5000);
        
    }

    console.log(icons);
    console.log(path);
    return (
        <div>
            <GoogleMap
            ref = {mapRef} 
            mapContainerStyle={mapContainerStyle}
            zoom={4}
            center={user_location}>
                <Marker
                id = "user_pos"
                position = {user_location}
                >    
                </Marker>
                <Polyline
                    ref={polylineRef}
                    path={path}
                    icons={icons}
                    map={mapRef}
                />  
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

