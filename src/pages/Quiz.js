import React from 'react'

import Question from "../components/Question"

const checkAnswer = () => {
    console.log("You clicked me")
}

export default function Quiz() {
    return (
        <div>
            <h1>Fly Your Food</h1>
            <Question></Question>
        </div>
    )
}