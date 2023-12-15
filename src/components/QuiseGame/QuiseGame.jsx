import React, { useState } from 'react';
import './QuiseGame.css'

const QuiseGame = () => {
    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            correctAnswer: 'Paris',
        },
        {
            question: 'Which programming language is React written in?',
            options: ['Java', 'JavaScript', 'C#', 'Python'],
            correctAnswer: 'JavaScript',
        },
        {
            question: 'What is the largest planet in our solar system?',
            options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
            correctAnswer: 'Jupiter',
        },
        {
            question: 'What does HTML stand for?',
            options: ['HyperText Markup Language', 'Hyper Transfer Markup Language', 'High Transfer Markup Language', 'HighText Markup Language'],
            correctAnswer: 'HyperText Markup Language',
        },
        {
            question: 'Which of the following is not a programming language?',
            options: ['Java', 'C++', 'HTML', 'CSS'],
            correctAnswer: 'CSS',
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswerClick = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };

    return (
        <div className="app">
            <h1 style={{color:'white' , paddingBottom:'10px'}}>MCQ Quiz</h1>
            {!showResult ? (
                <>
                    <div className="question-container">
                        <h2 className='hading'>{questions[currentQuestion].question}</h2>
                        <div className="options-container">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button key={index} onClick={() => handleAnswerClick(option)}>
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                    <p className="score">Score: {score}</p>
                </>
            ) : (
                <>
                    <div className="result-container">
                        <h2>Quiz Completed!</h2>
                        <p>Your Score: {score} out of {questions.length}</p>
                        <button onClick={handleRestart}>Restart</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default QuiseGame;