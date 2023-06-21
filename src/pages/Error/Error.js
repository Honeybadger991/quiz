import './error.scss'
import { useNavigate } from 'react-router-dom'

const Error = ({setCategoty, setAmount, setQuestions, setDifficulty}) => {

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/')
    setCategoty(9);
    setAmount(10);
    setQuestions();
    setDifficulty('easy');
  }

  return (
    <div className="error-wrapper">
        <div className="error-message">
            <h1 className="error-text">Sorry, looks like this category is not available now... </h1>
            <button onClick={() => goBack()} className='error-back'>to home</button>
        </div>
    </div>
  )
}

export default Error