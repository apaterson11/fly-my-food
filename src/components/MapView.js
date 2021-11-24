import React, { useState, useRef, useEffect, useContext, Component, useLayoutEffect, createRef, prevProps, prevState } from "react";
import Popup from "reactjs-popup";
import { GoogleMap, Marker, useLoadScript, LoadScript, Polyline } from "@react-google-maps/api";

import BarcodePopup from './BarcodePopup';
import { Icon } from "@material-ui/core";

require("./css/BarcodePopup.css");

const glasgow = { lat: 55.8642, lng: -4.2518 };

const mapContainerStyle = {
    width: '100wv',
    height: '100vh',
};

class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
        this.state = {
            line: new Polyline({
                path: [
                    { lat: 56.8642, lng: -5.3518 },
                    { lat: 56, lng: -5.3518 },
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
            }),
            user_location: glasgow,

        };
        this.waitForWindow= this.waitForWindow.bind(this);
    }

    // Use the DOM setInterval() function to change the offset of the symbol
    // at fixed intervals.
    // state is changing but not reflected in frontend
    animateCircle() {
        let count = 0;
        if (this.state.line) {
            window.setInterval(() => {
                count = (count + 1) % 200;
                let newLine = this.state.line;
                let newOffset = newLine.props.options.icons[0].offset;
                newOffset = count / 2 + "%";
                newLine.props.options.icons[0].offset = newOffset;

                this.setState({ line: new Polyline({
                    path: [
                        { lat: 56.8642, lng: -5.3518 },
                        { lat: 56, lng: -5.3518 },
                    ],
                    options: {
                        icons: [
                            { icon: 
                                {
                                    path: window.google ? window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW : null, 
                                    scale: 8, 
                                    strokeColor: "#A6B7D7", 
                                }, 
                                offset: newOffset
                            }
                        ],
                    },
                })});


                // let user_loc = this.state.user_location;
                // let lng = user_loc.lng
                // lng = lng + 0.01
                // user_loc.lng = lng;
                // this.setState({ user_location: user_loc })
                // // this.setState({ user_location: { lat: 0, lng: 0 } })

                // let path = newLine.props.path[0].lat;
                // path = path + 1
                // newLine.props.path[0].lat = path;
                // this.setState({ ...this.state.line, path: path })
            }, 100);
        }
    }

    waitForWindow() {
        if (typeof window.google !== "undefined") {
            //variable exists, do what you want
            let newLine = this.state.line;
            let icon = newLine.props.options.icons[0];
            icon.icon.path = window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW;
            newLine.props.options.icons[0] = icon;
            this.setState({ line: newLine })
            this.animateCircle();
        }
        else{
            setTimeout(() => this.waitForWindow(), 3000);
        }
    }

    componentDidMount() {
        this.waitForWindow();
    };
    
    render() {
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
                    <Polyline
                        path={this.state.line.props.path}
                        options={this.state.line.props.options}
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