import React from 'react'
import {score as finalScore} from "../components/Question"
import {Link} from "react-router-dom"

import "./css/AfterQuiz.css"

export default function AfterQuiz() {
    return (
        <div className="question-container">
            <body>Congratulations! You have finished the quiz and in total scored {finalScore} points!</body>
            <Link to="/">Homepage</Link>
        </div>
    
    )
}