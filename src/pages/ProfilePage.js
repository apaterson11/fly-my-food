import React from 'react';
import ProfileContent from '../components/ProfileContent';

import "./css/ProfilePage.css";

function ProfilePage () {
    return (
        <div className="profile-container">
            <ProfileContent name="Jack Bites" city="Glasgow, UK" firstShop="Lidl" secondShop="Aldi" currentKM="155" prevKM="165" carbonFootprint="6%" />
        </div>
    );
}

export default ProfilePage;