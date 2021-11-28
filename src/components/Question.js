import React, {useState, createContext} from 'react'
// import styled from 'styled-components'
import { Navigate } from "react-router-dom"






// const Button = styled.button`
//     size: 10px;
//     background-color: #3E3E3E;
//     color: white;
//     border-radius: 5px;
//     border: 2px solid #3E3E3E;
//     cursor: pointer;

//     &:hover
// `




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

		<div className='Questions'>
			{showScore ? (
                
				<div className='redirect to leaderboards'>
                    
					<Navigate to="/quizscore"/>
                    
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>
						</div>
						<div className='question-text'>{questions[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answer.map((answer) => (
							<button onClick={() => checkAnswer(answer.isCorrect)}>{answer.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>

	);
	
}


