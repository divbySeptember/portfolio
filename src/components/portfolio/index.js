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
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada tempor purus, a tincidunt dui luctus ac. Duis purus leo, viverra a dolor ut, posuere ornare sem."
                    />
                    <Thumbnail
                        link="/lifegpa"
                        image={lg}
                        title="Life gpa"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada tempor purus, a tincidunt dui luctus ac. Duis purus leo, viverra a dolor ut, posuere ornare sem."
                    />
                    <Thumbnail
                        link="/bgp"
                        image={bgp}
                        title="Baseball Game Predictor"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada tempor purus, a tincidunt dui luctus ac. Duis purus leo, viverra a dolor ut, posuere ornare sem."
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