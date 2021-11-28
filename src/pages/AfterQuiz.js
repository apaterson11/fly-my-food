import React from 'react'
import {score as finalScore} from "../components/Question"
import {Link} from "react-router-dom"

export default function AfterQuiz() {
    return (
        <div>
            <h1>Fly Your Food</h1>
            <body>Congratulations! You have finished the quiz and in total scored {finalScore} points!</body>
            <Link to="/">Homepage</Link>
        </div>
    
    )
}