
import React from 'react'
import styled from 'styled-components'
import Question from "./components/Question"
const Button = styled.button`
    size: 10px;
    background-color: #3E3E3E;
    color: white;
    border-radius: 5px;
    border: 2px solid #3E3E3E;
    cursor: pointer;

    &:hover
`
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