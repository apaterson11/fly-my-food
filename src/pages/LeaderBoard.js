import React from 'react';
import LeaderBoardView from "../components/LeaderBoardView"

import "./css/LeaderBoard.css"

function LeaderBoardPage () {
    return (
      <div className>
          <div className = "board-container">
            <h1 className="subtitle">Leader Board</h1>
            <div className="board">
                <LeaderBoardView />
            </div>
          </div>
      </div>
    );
}


export default LeaderBoardPage;