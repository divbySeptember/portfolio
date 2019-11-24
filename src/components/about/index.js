import React from 'react';
import Anthony from '../../img/as.jpg'
import './index.css'


const About = () => {
    return(
            <div className='aboutInfo'>
                <img className='as' src={Anthony} />
                <div className="aboutMe">
                    <h1 className='newHeader'> ~ About<span className='folio'>Me</span> ~</h1>
                    <p className='aboutText'>Anthony J. Johnson, from Miami, FL. I am humble and always learning but yet I am very confident in what I do, I belive in hard work & Fun, I know it's a little contradicting, but I also believe you have to love what you do and if that statement is true then its always fun to work hard.
                                             The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable. Using the latest in HTML, Css, Javascript, Node.js and Express,SQL, Unit testing, Less, typexscript, react.js, etc </p>
                </div>

            </div>
        
    )
}


export default About;