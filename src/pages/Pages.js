import {Routes, Route} from 'react-router-dom'


import Start from "./Start/Start";
import Game from "./Game/Game";
import Score from "./Score/Score";
import Error from './Error/Error';

import React from 'react'

const Pages = ({questions, category, setCategoty, amount, setAmount, setDifficulty, setQuestions, getQuestions, score, setScore}) => {
  return (
    <Routes>
        <Route path='/' element={<Start setCategoty={setCategoty} setAmount={setAmount} setDifficulty={setDifficulty} getQuestions={getQuestions}/>} />

        <Route path='/game' element={<Game questions={questions} amount={amount} score={score} setScore={setScore} setQuestions={setQuestions} setCategoty={setCategoty} setAmount={setAmount} setDifficulty={setDifficulty} />} />

        <Route path='/score' element={<Score questions={questions} category={category} amount={amount} score={score} />} />
        
        <Route path='/error' element={<Error setQuestions={setQuestions} setCategoty={setCategoty} setAmount={setAmount} setDifficulty={setDifficulty}/>} />
    </Routes>
  )
}

export default Pages

