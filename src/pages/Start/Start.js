
import { useNavigate } from 'react-router-dom'
import Categories from '../../data/Categories'
import './start.scss'

const Start = ({setCategoty, setAmount, setDifficulty, getQuestions}) => {

    const navigate = useNavigate();
    const options = Categories.map(cat => {
        return (
            <option key={cat.category} value={cat.value}>{cat.category}</option>
        )
    })
    const startGame = () => {
        navigate('/game')
        getQuestions();
    }
    
    return (

        <div className="start-wrapper">
            <div className='options'>
                <label className='label' htmlFor="categories">category:</label>
                <select onChange={(e) => setCategoty(e.target.value)} className='select' name="categories" id="categories">
                    {options}
                </select>
                <label className='label' htmlFor="amount">number of questions:</label>
                <select onChange={(e) => setAmount(e.target.value)} className='select' name="amount" id="amount">
                    <option key={1} value={10}>10</option>
                    <option key={2} value={15}>15</option>
                    <option key={3} value={20}>20</option>
                </select>
                <label className='label' htmlFor="difficulty">difficulty:</label>
                <select onChange={(e) => setDifficulty(e.target.value)} className='select' name="difficulty" id="difficulty">
                    <option key={1} value={'easy'}>easy</option>
                    <option key={2} value={'medium'}>medium</option>
                    <option key={3} value={'hard'}>hard</option>
                </select>
                <button onClick={() => startGame()} className='submit'>S t a r t</button>
            </div>
            <div className='image'> </div>
        </div>
    )
}

export default Start
