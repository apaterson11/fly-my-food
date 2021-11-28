import React from 'react';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

import HelpPage from "../pages/HelpPage"
import worldIcon from "../images/world_icon.png"
import profileIcon from "../images/settings_cog.png"
import historyIcon from "../images/history_icon.png"
import helpIcon from "../images/help_icon.png"
import leaderboardIcon from "../images/leaderboard_icon.png"

import "./css/HomePage.css"


function HomePage () {
    return (
      <div className="profile-container">
        <div className="inline-container">
          <div className="inline-element">
            <div className="top-element">
              <div className="nested-element-wrapper">
                <div className="top-element">
                  <img src={profileIcon} alt="Profile" width="100" height="100" />
                </div>
                <div className="bottom-element nested">
                  <Button variant="outlined"><Link to="/profile" className="link" style={{ textDecoration: 'none' }}>Profile</Link></Button>
                </div>
              </div>
            </div>
            <div className="bottom-element">
              <div className="nested-element-wrapper">
                  <div className="top-element">
                    <img src={historyIcon} alt="Quiz" width="100" height="100" />
                  </div>
                  <div className="bottom-element nested">
                    <Button variant="outlined" style={{ color: '#fff' }}><Link to="/quiz" className="link" style={{ textDecoration: 'none' }}>Quiz</Link></Button>
                  </div>
              </div>  
            </div>
          </div>
          <div className="inline-element">
            <div className="element-wrapper">
              <div className="top-element">
                <img src={worldIcon} alt="World" width="300" height="300" />
              </div>
              <div className="bottom-element scan">
                <Button variant="outlined"><Link to="/map-view" className="link" style={{ textDecoration: 'none' }}>Scan</Link></Button>
              </div>
            </div>
          </div>
          <div className="inline-element">
            <div className="top-element">
              <div className="nested-element-wrapper">
                <div className="top-element">
                  <img src={leaderboardIcon} alt="Profile" width="100" height="100" />
                </div>
                <div className="bottom-element nested">
                  <Button variant="outlined" style={{ color: '#fff'}}><Link to="/leaderboard" className="link" style={{ textDecoration: 'none' }}>Leaderboard</Link></Button>
                </div>
              </div> 
            </div>
            <div className="bottom-element">
              <div className="nested-element-wrapper">
                <div className="top-element">
                  <img src={helpIcon} alt="Profile" width="100" height="100" />
                </div>
                <div className="bottom-element nested">
                  <Popup
                    trigger={() => (<Button variant="outlined" style={{ color: '#fff'}}>Help</Button>)}
                    position="bottom right"
                    closeOnDocumentClick
                  >
                    <HelpPage />
                  </Popup>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    );
}


export default HomePage;