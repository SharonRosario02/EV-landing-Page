import './Hero.css'
import Arrow_btn from '../../assets/arrow_btn.png'
import Pause_icon from '../../assets/pause_icon.png'
import Play_icon from '../../assets/play_icon.png'

const Hero = ({setPlayStatus, heroData, heroCount, setHeroCount, playStatus}) => {

  return (
    <div className='hero'>
        <div className="hero-text">
            <p> {heroData.text1}</p>
            <p> {heroData.text2}</p>
        </div>
        <div className="hero-explore">
            <p>Explore the features</p>
            <img src={Arrow_btn} alt="" />
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=> setHeroCount(0)} className={heroCount === 0? 'hero-dot orange' : 'hero-dot'}></li>
                <li onClick={()=> setHeroCount(1)} className={heroCount === 1? 'hero-dot orange' : 'hero-dot'}></li>
                <li onClick={()=> setHeroCount(2)} className={heroCount === 2? 'hero-dot orange' : 'hero-dot'}></li>
            </ul>
            <div className="hero-play">
                <img src={playStatus? Pause_icon : Play_icon} onClick={()=> setPlayStatus(!playStatus)} alt="" />
                <p>See the Video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero;