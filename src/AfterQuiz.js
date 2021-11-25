import React from 'react'
import styled from 'styled-components'
import {score as finalScore} from "./components/Question"
import {Link} from "react-router-dom"

const Button = styled.button`
    size: 10px;
    background-color: #3E3E3E;
    color: white;
    border-radius: 5px;
    border: 2px solid #3E3E3E;
    cursor: pointer;

    &:hover
`
export default function AfterQuiz() {
    return (
        <div>
            <h1>Fly Your Food</h1>
            <body>Congratulations! You have finished the quiz and in total scored {finalScore} points!</body>
            <Link to="/leader">LeaderBoard</Link>  <Link to="/">Home</Link>
        </div>
    
    )
}