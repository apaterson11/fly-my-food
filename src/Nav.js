import React from 'react'
import {Link} from "react-router-dom"
import {score as finalScore} from "./components/Question"



export default function Nav() {

    return (
        <div>
            <li><Link to = "/map">Map</Link></li>
            <li><Link to = "/leader">Leader</Link></li>
            <li><Link to = "/quiz">Quiz</Link></li>
            
        </div>
    )
}
