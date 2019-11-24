import React from 'react';
import Designer from '../../icons/designer.svg'
import './index.css'
import Resume from '../../files/aj.pdf'

const Home = () => {
    return (
        <div className='hero'>
            <img src={Designer} />
            <div className='heroText'>
                <h1>Welcome To My World!</h1>
                <p className='heropar'>Below are a few projects that I am proud of, feel free to click and learn more.</p>
                <a className='atag' href={Resume} target="_blank" ><button className='resume'>View My Resume</button></a>
            </div>
            
        </div>
    )
}
export default Home