import React from'react';
import './index.css'
import LifeGPAMAC from '../../img/lgmac.png'



const LifeGPA = () =>{
    return(
        <div>
            <div className='projectHero'>
                <h1 className='projectHeader'>~ Life<span className='phspan'>GPA</span> ~</h1>
            </div>
            <div className='projectInfo'>
                <img src={LifeGPAMAC} className='wunderProject' />
                <div className='projectContent'>
                    <p className='projectText'>There are so many productivity and habit tracking apps out there to measure progress in one area or another, but nothing that measures your overall life with a single metric. Until now. Meet LifeGPA. An app designed to summarize your life’s most important efforts into a simple composite number.
Users create an account, log in, and tell the app a list of habits they want to track. There are both prompts to add habits to your list, and spots to write your own.</p>
                    <div className='projectIcons'>
                        
                        <a href="https://github.com/lambdaschool-lifegpa"><button className="newBtn" type="button"><i  class="fab portIcon fa-github"/></button></a>
                        <a href="https://lifegpa-abdulkarim.netlify.com/"><button className="newBtn"><i  class="fas portIcon fa-globe" /></button></a>

                    </div>
                </div>

            </div>
        </div>
    )
}





export default  LifeGPA;