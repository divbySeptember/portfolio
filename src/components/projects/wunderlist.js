import React from 'react'
import './index.css'
import NewWunderList from '../../img/wlmac.png'


const WunderList = () =>{
    return(
        <div>
            <div className='projectHero'>
                <h1 className='projectHeader'>~ Wunder<span className='phspan'>List 2.0</span> ~</h1>
            </div>
            <div className='projectInfo'>
                <img src={NewWunderList} className='wunderProject' />
                <div className='projectContent'>
                    <p className='projectText'>WunderList 2.0 is a user base Todo App that helps user plan and create daily habbits. With WL 2.0  you can create a account add todo items and set a date/repeat date and maak a item as done. the stack for the project is Node.js, Express. js, SQLITE3, React.js, Redux, React-Router, React-cookies.</p>
                    <div className='projectIcons'>
                        
                        <a href="https://github.com/bw-wunderlist"><button className="newBtn" type="button"><i  class="fab portIcon fa-github"/></button></a>
                        <a href="https://wunderlist24.netlify.com/"><button className="newBtn"><i  class="fas portIcon fa-globe" /></button></a>

                    </div>
                </div>

            </div>
        </div>
    )
}





export default WunderList;