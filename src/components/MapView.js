import React, { useState, useRef, useEffect, useContext, Component, useLayoutEffect, createRef, prevProps, prevState } from "react";
import Text from "react-native";
import Popup from "reactjs-popup";
import { GoogleMap, Marker, useLoadScript, LoadScript, Polyline } from "@react-google-maps/api";

import BarcodePopup from './BarcodePopup';
import { TextField } from "@material-ui/core";

require("./css/BarcodePopup.css");
require("./css/TextField.css");

const glasgow = { lat: 55.8642, lng: -4.2518 };
// const inputs = [
//     [{lat: 61.524010, lng: 105.318756}, glasgow],
//     [{lat: 35.861660, lng: 104.195396}, glasgow],
//     [{lat: 34.052235, lng: -118.243683}, glasgow],
//     [{lat: 52.945190, lng: -0.160125}, glasgow],
// ]

const mapContainerStyle = {
    width: '100wv',
    height: '100vh',
};

class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
        this.state = {
            lines: [],
            line: new Polyline({
                path: [
                    { lat: 56.8642, lng: -5.3518 },
                    glasgow,
                ],
                options: {
                    icons: [
                        { icon: 
                            {
                                path: window.google ? window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW : null, 
                                scale: 4, 
                                strokeColor: "#A6B7D7",
                            }, 
                            offset: "100%" 
                        }
                    ],
                },
            }),
            inputs: [],
            user_location: glasgow,
            distance: 0,

        };
        this.waitForWindow = this.waitForWindow.bind(this);
        this.createLines = this.createLines.bind(this);
        this.calculateDistance = this.calculateDistance.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

    calculateDistance(lat1, lon1, lat2, lon2) {
        // The math module contains a function
        // named toRadians which converts from
        // degrees to radians.
        lon1 =  lon1 * Math.PI / 180;
        lon2 = lon2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;

        // Haversine formula
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a = Math.pow(Math.sin(dlat / 2), 2)
            + Math.cos(lat1) * Math.cos(lat2)
            * Math.pow(Math.sin(dlon / 2),2);
        
        let c = 2 * Math.asin(Math.sqrt(a));

        // Radius of earth in kilometers. Use 3956
        // for miles
        let r = 6371;

        // calculate the result
        return(c * r);
    }

    // Use the DOM setInterval() function to change the offset of the symbol
    // at fixed intervals.
    // state is changing but not reflected in frontend
    animateCircle(line, index, origin, destination) {
        let count = 0;
        window.setInterval(() => {
            count = (count + 1) % 200;
            let newLine = line;
            let newLines = [...this.state.lines];
            let newOffset = newLine.props.options.icons[0].offset;
            newOffset = count / 2 + "%";
            newLine.props.options.icons[0].offset = newOffset;

            newLine = new Polyline({
                path: [
                    origin,
                    destination,
                ],
                options: {
                    icons: [
                        { icon: 
                            {
                                path: window.google ? window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW : null, 
                                scale: 4, 
                                strokeColor: "#A6B7D7", 
                            }, 
                            offset: newOffset
                        }
                    ],
                },
            })

            newLines.splice(index, 1, newLine);
            this.setState({ lines: newLines });
        }, 10);
    }

    createLines(input) {
        console.log(input);
        let origin  = input[0];
        let destination = input[1];

        let line = new Polyline({
            path: [
                origin,
                destination,
            ],
            options: {
                icons: [
                    { icon: 
                        {
                            path: window.google ? window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW : null, 
                            scale: 8, 
                            strokeColor: "#A6B7D7",
                        }, 
                        offset: "100%" 
                    }
                ],
            },
        })

        const {lines} = this.state;
        lines.push(line);
        this.setState({lines})
        this.animateCircle(line, this.state.inputs.indexOf(input), origin, destination);
        let result = this.calculateDistance(origin.lat, origin.lng, destination.lat, destination.lng);
        this.setState({ distance: this.state.distance + result})
    }

    waitForWindow() {
        if (typeof window.google !== "undefined") {
            //variable exists, do what you want
            let newLine = this.state.line;
            let icon = newLine.props.options.icons[0];
            icon.icon.path = window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW;
            newLine.props.options.icons[0] = icon;
            this.setState({ line: newLine })
        }
        else{
            setTimeout(() => this.waitForWindow(), 3000);
        }
    }

    componentDidMount() {
        this.waitForWindow();
    };

    getCoordinates (coords) {
        if (coords) {
            const {inputs} = this.state;
            inputs.push(coords);
            this.setState({ inputs });
            this.createLines(inputs.slice(-1)[0]);
        }
    }
    
    render() {
        let content = this.state.lines.map((line, index) => 
            <Polyline
                path={line.props.path}
                options={line.props.options}
            />
        );
        
        return (
            <div>
                <LoadScript
                     googleMapsApiKey = 'AIzaSyAYtDG4yYGDrPP5zZF2OqYBwQ4pA8-w6Wk'
                >
                <GoogleMap
                ref = {this.mapRef} 
                mapContainerStyle={mapContainerStyle}
                zoom={4}
                center={this.state.user_location}>
                    <Marker
                        id = "user_pos"
                        position = {this.state.user_location}
                    >    
                    </Marker>
                    {content}
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
                            <BarcodePopup>getCoordinates={this.getCoordinates}</BarcodePopup>
                        </span>
                    </Popup>
                    <TextField
                        id="distance"
                        label="Distance"
                        value={this.state.distance.toFixed(2) + " km"}
                        margin="normal"
                        className="textField"
                    />
                    
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