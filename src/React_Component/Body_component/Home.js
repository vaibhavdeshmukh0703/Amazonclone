import React from 'react';
import './Home.css';
import Background from '../../image/background.jpg';
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__background'src={Background} alt='backgroundImage'/>

                <div className='home__row'>
                     
                </div>
            </div>      
        </div>
    )
}
export default Home;
