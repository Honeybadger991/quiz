import { useNavigate } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/logo_slug.svg'

const Header = ({setCategoty, setAmount, setQuestions, setScore, setDifficulty}) => {

  const navigate = useNavigate()
  const handleClick = () => {
    if(window.location.href !== 'http://localhost:3000/'){
      setCategoty(9);
      setAmount(10);
      setDifficulty('easy');
    }
    setScore(0);
    setQuestions();
    navigate('/')
  }

  return (
    <div className='header'>
      <div className='header-wrapper'>
        <div onClick={handleClick} className='logo-name'>BRAIN SLUG
          <div className="logo"><img src={logo} alt="" /></div>
        QUIZ</div>
      </div>
      <div className='divider'></div>
    </div>
  )
}

export default Header;
