import './question.scss'
import Spinner from '../Spinner/Spinner'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Question = (
    {answers,
    questions,
    currentQ,
    setCurrentQ,
    score,
    setScore,
    setQuestions,
    correct,
    setCategoty,
    setAmount,
    setDifficulty}
    ) => {
    const [selected, setSelected] = useState();
    const [notSelected, setNotSelected] = useState();
    const navigate = useNavigate();

    const handleChose = (answer) => {
        setSelected(answer);
        if (answer === correct) {
            setScore(score + 1)
        }
        setNotSelected(false)
    }

    const handleBg = (answer) => {
        if (answer === selected && selected === correct) {
            return '#1dfd82'
        }else if (answer === selected && selected !== correct) {
            return '#c41d1d'
        } else if (answer === correct) {
            return '#1dfd82'
        };
    }

    const handleNext = () => {
        if(currentQ === questions.length - 1){
            navigate('/score')
        } else if(selected){
            setCurrentQ(currentQ + 1);
            setSelected();
        } else {
            setNotSelected('Please select some option')
        }
    }


    const handleQuit = () => {
        setQuestions();
        setCurrentQ(0);
        setCategoty(9);
        setAmount(10);
        setScore(0);
        setDifficulty('easy');
        navigate('/');
    }

    
    const options = !answers ? null : answers.map(option => {
        return <button 
            style={{backgroundColor: `${selected && handleBg(option)}`}} 
            className="answer" 
            key={option} 
            onClick={() => handleChose(option)}
            disabled={selected}
            dangerouslySetInnerHTML={{__html: option}}
            ></button>
    });

    const content = !questions ? <Spinner/> :    
    <>
        <div className="question" dangerouslySetInnerHTML={{__html: questions[currentQ].question}}></div>
        <div className="answers">
            {options}
        </div>
        {notSelected ? <p className='error'>{notSelected}</p> : null}
        <button onClick={() => handleNext()} className='confirm'>next question</button>
        <button onClick={() => handleQuit()} className='quit'>quit</button>
    </>
    

  return (
    <>
        {content}
    </>
  )
}

export default Question