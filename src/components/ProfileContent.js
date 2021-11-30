import React from "react";

import profilePicture from "../images/profile_picture.png"

import "./css/ProfileContent.css";

function ProfileContent (props) {

  return (
    <div className="profile-container">
        <div className="profile-heading"><h3>My Profile</h3></div>
        <div className="inline-container">
            <div className="text-side">
                <p className="profile-text"><strong>Name:</strong> {props.name}</p>
                <p className="profile-text"><strong>City:</strong> {props.city}</p>
                <p className="profile-text"><strong>Preferred Shop:</strong> {props.firstShop}</p>
                <p className="profile-text"><strong>Secondary Shop:</strong> {props.secondShop}</p>
                <p className="profile-text"><strong>Current Shop:</strong> {props.currentKM} km</p>
                <p className="profile-text"><strong>Previous Shop:</strong> {props.prevKM} km</p>
                <p className="profile-text"><strong>Reduction in Carbon Footprint:</strong> {props.carbonFootprint}</p>
            </div>
            <div className="image-side">
                <img src={profilePicture} alt="World" width="150" height="400" />
            </div>
        </div>
    </div>
  );
};

export default ProfileContent;