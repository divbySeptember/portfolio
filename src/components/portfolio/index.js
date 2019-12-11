import React from 'react'
import Thumbnail from './thumbnails/thumbnail';
// import CardGroup from 'react-bootstrap/Card';
import wl  from '../../img/wl.png'
import cl  from '../../img/cl.png'
import bgp  from '../../img/bgp.png'
import lg  from '../../img/lg.png'
import './index.css'
import Home from '../home'





const Portfolio = (props) => {
    return (
        <div>
            <Home />

                <h1 className='portHeader'> ~ Port<span className='folio'>folio</span> ~</h1>
                <div className="cardContainer">
                    <Thumbnail
                        link="/wunderlist"
                        image={wl}
                        title="Wunder List 2.0"
                        description="WunderList 2.0 is a user base Todo App that helps user plan and create daily habbits. With WL 2.0  you can create a account add todo items."
                    />
                    <Thumbnail
                        link="/lifegpa"
                        image={lg}
                        title="Life gpa"
                        description="Life GPA is habit tracking apps out there to measure progress in one area or another, nothing that measures overall life with a single metric. "
                    />
                    <Thumbnail
                        link="/bgp"
                        image={bgp}
                        title="Baseball Game Predictor"
                        description="Baseball Game Predictor is a user base product that is focused on users being able to predict the outcome of a base baseball game"
                    />
                    {/* <Thumbnail
                        link="/clarify"
                        image={cl}
                        title="Clarify"
                        description={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada tempor purus, a tincidunt dui luctus ac. Duis purus leo, viverra a dolor ut, posuere ornare sem.</p>}
                    /> */}
                </div>
        </div>
    )
}

export default Portfolio;