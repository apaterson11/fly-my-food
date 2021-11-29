import React from 'react';
import LeaderBoardView from "../components/LeaderBoardView"
import { Link } from "react-router-dom";
function LeaderBoardPage () {
    return (
      <div className="screen-container">
            <h1>Leader Board</h1>
            <LeaderBoardView></LeaderBoardView>
            <Link to="/">Homepage</Link>
      </div>
    );
}


export default LeaderBoardPage;