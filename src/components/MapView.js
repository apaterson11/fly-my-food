import React, { useState, useRef, useEffect, useContext, Component, useLayoutEffect, createRef, prevProps, prevState } from "react";
import Popup from "reactjs-popup";
import { GoogleMap, Marker, useLoadScript, Polyline, LoadScript } from "@react-google-maps/api";

import BarcodePopup from './BarcodePopup';
import { Icon } from "@material-ui/core";

require("./css/BarcodePopup.css");

const glasgow = { lat: 55.8642, lng: -4.2518 };

const mapContainerStyle = {
    width: '100wv',
    height: '100vh',
};

// let user_location = {lat: 0, lng: 0}; 
let user_location = glasgow;

class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: [
                { icon: 
                    {
                        path: window.google ? window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW : null, 
                        scale: 8, 
                        strokeColor: "#A6B7D7"
                    }, 
                    offset: "100%" 
                }
            ],
            path: [
                { lat: 56, lng: -5.3518 },
                { lat: 56.8642, lng: -5.3518 },
            ],
            lineRef: new Polyline,
            mapRef: null,

        };
        this.waitForWindow= this.waitForWindow.bind(this);
    }

    // Use the DOM setInterval() function to change the offset of the symbol
    // at fixed intervals.
    // state is changing but not reflected in frontend
    animateCircle(line) {
        console.log("function again")
        let count = 0;
        console.log(line);
        if (line) {
            window.setInterval(() => {
                count = (count + 1) % 200;
                let x = line.current.props.icons;
                let icons = this.state.icons;
                x[0].offset = count / 2 + "%";
                icons[0] = x[0];
                this.setState({ icons })

                let y = line.current.props.path;
                let path = this.state.path;
                path[0].lat = path[0].lat + 1;
            }, 5000);
        }
    }

    waitForWindow() {
        if(typeof window.google !== "undefined"){
            //variable exists, do what you want
            console.log("succeeded");
            console.log("icons " + this.state.icons)
            let icons = this.state.icons;
            let icon = icons[0];
            icon.icon.path = window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW;
            icons[0] = icon;
            this.setState({ icons })
        }
        else{
            setTimeout(this.waitForWindow, 250);
        }
    }

    componentDidMount() {
        console.log("found");
        this.waitForWindow();
        this.animateCircle(this.state.lineRef);
    };

    componentDidUpdate(prevProps, nextState) {
        console.log(nextState.icons);
        console.log(this.state.icons);
        if (nextState.icons !== this.state.icons) {
            console.log("wow");
        }
    }
    
    render() {
        console.log(this.state.icons);
        console.log(this.state.lineRef);
        return (
            <div>
                <LoadScript
                     googleMapsApiKey = 'AIzaSyAYtDG4yYGDrPP5zZF2OqYBwQ4pA8-w6Wk'
                >
                <GoogleMap
                ref = {this.state.mapRef} 
                mapContainerStyle={mapContainerStyle}
                zoom={4}
                center={user_location}>
                    <Marker
                        id = "user_pos"
                        position = {user_location}
                    >    
                    </Marker>
                    <Polyline
                        ref={this.state.lineRef}
                        path={this.state.path}
                        icons={this.state.icons}
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
                </LoadScript>
            </div>
        );
    };
}

export default MapView

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