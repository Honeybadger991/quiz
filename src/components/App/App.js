
import './app.scss';
import Header from '../Header/Header';
import Pages from '../../pages/Pages';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { useHttp } from '../../hooks/useHttp';
import { useNavigate } from 'react-router-dom';

function App() {
  const [questions, setQuestions] = useState()
  const [score, setScore] = useState(0)
  const [category, setCategoty] = useState(9)
  const [amount, setAmount] = useState(10)
  const [difficulty, setDifficulty] = useState('easy')
  const {request} = useHttp();
  const navigate = useNavigate();

  const getQuestions = async (cat = category, amo = amount, dif = difficulty) => {
    const res = await request(`https://opentdb.com/api.php?amount=${amo}&category=${cat}&difficulty=${dif}&type=multiple`)
    if(res.response_code === 1){
      navigate('/error')
      return
    }
    setQuestions(res.results)
    setScore(0)
  }


  return (
      <main className="app">
        <div className='content'>
          <Header 
          setCategoty={setCategoty} 
          setAmount={setAmount} 
          setQuestions={setQuestions} 
          setScore={setScore}
          setDifficulty={setDifficulty}
          />
          <Pages
          questions={questions}
          category={category}
          setCategoty={setCategoty}
          amount={amount}
          setAmount={setAmount}
          setDifficulty={setDifficulty}
          getQuestions={getQuestions}
          setQuestions={setQuestions}
          score={score}
          setScore={setScore}
          />
          <Footer/>
        </div>
      </main>
  );
}

export default App;
