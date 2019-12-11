import React from'react';
import './index.css'
import BGPMAC from '../../img/bgpmac.png'



const BGP = () =>{


    // const bgpHub = () => {
        
    //     {location.href="http://www.github.com"}
    // }
    
    return(
        <div>
            <div className='projectHero'>
                <h1 className='projectHeader'>~ Baseball Game<span className='phspan'>Predictor</span> ~</h1>
            </div>
            <div className='projectInfo'>
                <img src={BGPMAC} className='wunderProject' />
                <div className='projectContent'>
                    <p className='projectText'>Baseball Game Predictor is a user base product that is focused on users being able to predict the outcome of a base baseball game. There was a full stack team working this project in a agile enviorment, including daily stand up meetings as well as afternoon meetings. Our DS team handled all of the algorithm & data structure in Python, and Me and my web dev team flushed out the app using Node. js on the backned, react & redux on the frontend along with react router & metiral UI,  Feel free to view the work in progress below. </p>
                    <div className='projectIcons'>
                        
                        <a href="https://github.com/Lambda-School-Labs/baseball-game-prediction-fe"><button className="newBtn" type="button"><i  class="fab portIcon fa-github"/></button></a>
                        <a href="http://www.baseballgamepredictor.com"><button className="newBtn"><i  class="fas portIcon fa-globe" /></button></a>

                    </div>
                </div>

            </div>
        </div>
    )
}





export default BGP;