import './score.scss';
import pic1 from '../../assets/result_pic.jpg';
import pic2 from '../../assets/result_pic2.jpg';
import pic3 from '../../assets/result_low.jpg';
import pic4 from '../../assets/result_low2.jpg';
import { useNavigate } from 'react-router-dom'

const Score = ({score, amount}) => {

  const navigate = useNavigate();
  const percent = score === 0 ? 0 : (score * 100 / amount).toFixed()

  let img = (percent < 24) ? pic4 : (percent < 49) ? pic3 : (percent < 74) ? pic2 : pic1

  let txt = (percent < 24) ? 'Looks like my work here is done...' :
            (percent < 49) ? "Looks like there's something left at the bottom..." :
            (percent < 74) ? 'Juicy brains mate! Let me hug you))' : 
            'Me gusta!!! What a great example! I love you Bro'

  return (
    <div className="score-wrapper">
      <div className="result">
        <h1 className="result-top">Your score is {score} out of {amount}</h1>
        <div className="result-bot">
          <div className="result-pic"><img src={img} alt="result_picture"/></div>
          <div className="result-right"> 
            <div className="result-text"> It's {percent}% of right answers. <br /><i>{txt}</i></div>
            <button onClick={() => {navigate('/')}} className='back'>to home</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Score
