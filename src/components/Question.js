import React, { useState } from 'react'

import { Navigate } from "react-router-dom"
import { Button } from "@material-ui/core";

import "./css/Question.css"

export var score = 0;
export default function Question() {
        
        const questions = [
        {
                question: "Where did the Tomatoes from your last scanned come from?",
                answer: [
                    {answerText: 'Wrong', isCorrect: false},
                    {answerText: 'Wrong', isCorrect: false},
                    {answerText: 'Correct', isCorrect: true},
                    {answerText: 'Wrong', isCorrect: false},
                ],
        },
        {
            question: "Where did the Potato from your last scanned come from?",
            answer: [
                {answerText: 'Wrong', isCorrect: false},
                {answerText: 'Wrong', isCorrect: false},
                {answerText: 'Correct', isCorrect: true},
                {answerText: 'Wrong', isCorrect: false},
            ], 
        },
        {
            question: "Where did the Lemon from your last scanned come from?",
            answer: [
                {answerText: 'Wrong', isCorrect: false},
                {answerText: 'Wrong', isCorrect: false},
                {answerText: 'Correct', isCorrect: true},
                {answerText: 'Wrong', isCorrect: false},
            ], 
        },

    ];

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const checkAnswer = (isCorrect) => {
        if (isCorrect) {
            score+=500
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);

        }else{
            setShowScore(true)
            
        }
    };

	return (

		<div className='question-container'>
			{showScore ? (
                
				<div className='redirect to leaderboards'>
                    
					<Navigate to="/quizscore"/>
                    
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<h3>Question {currentQuestion + 1}</h3>
						</div>
						<div className='question-text'>{questions[currentQuestion].question}</div>
					</div>
					<div className='button-container'>
						{questions[currentQuestion].answer.map((answer) => (
							<Button variant="outlined" className="question-button" style={{ color: '#fff'}} onClick={() => checkAnswer(answer.isCorrect)}>{answer.answerText}</Button>
						))}
					</div>
				</>
			)}
		</div>

	);
	
}


