import { useState, useEffect } from 'react'
import Question from '../../components/Question/Question';
import Spinner from '../../components/Spinner/Spinner';
import './game.scss'
const Game = (
    {questions,
    score,
    setScore,
    setQuestions,
    setCategoty,
    setAmount,
    setDifficulty}
    ) => {

    const [answers, setAnswers] = useState([]);
    const [currentQ, setCurrentQ] = useState(0);

    useEffect(() => {
        setAnswers( questions &&
            handleShuffle([questions[currentQ]?.correct_answer, ...questions[currentQ]?.incorrect_answers,])
            );
        }, [currentQ, questions]);
        
    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };

    const content = questions ? 
        <>
            <div className="panel">
                <p className="panel-item category">Category: <br />{questions[currentQ]?.category}</p>
                <h1 className="panel-item number">Question {currentQ + 1} of {questions.length}:</h1>
                <p className="panel-item score">Score: {score}</p>
            </div>
            <Question
            answers={answers}
            questions={questions}
            currentQ={currentQ}
            setCurrentQ={setCurrentQ}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            correct={questions[currentQ]?.correct_answer}
            setCategoty={setCategoty} 
            setAmount={setAmount} 
            setDifficulty={setDifficulty}
            />
        </> : <Spinner/>

    return (
        <div className="wrapper">
            {content}
        </div>
    )
}

export default Game
