import React from 'react';
import LeaderBoardView from "../components/LeaderBoardView"
import { Link } from "react-router-dom";
import "./css/LeaderBoard.css"
function LeaderBoardPage () {
    return (
      <div className>
          <div className = "board-container">
            <h1 className="subtitle">Leader Board</h1>
            <div className="board">
                <LeaderBoardView ></LeaderBoardView>
            </div>
            <Link to="/">Homepage</Link>
            </div>
      </div>
    );
}


export default LeaderBoardPage;