import React, {useContext} from 'react'
import {score as finalScore} from './components/Question'
import {Link} from "react-router-dom"



export default function Leader() {
    




    return (
        <div>
            <h1>Fly Your Food</h1>
            <body>You:{finalScore}</body>
            <Link to="/">Home</Link>
        </div>
    )
}