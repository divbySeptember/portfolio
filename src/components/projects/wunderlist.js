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
                    <p className='projectText'>Morbi nec ipsum eu urna sagittis imperdiet ut eget urna. Proin ac aliquam leo. Mauris et pretium nisl, at varius augue. Ut at pulvinar est, non faucibus velit. Vivamus sagittis, lorem et tempus dignissim, dui massa consectetur diam, at lobortis metus mauris at ante. Vivamus sodales nibh quis sodales tincidunt. Aliquam venenatis consequat lectus, nec lobortis nulla venenatis ac. Phasellus eu odio tincidunt, aliquam purus vitae, fermentum lorem. Suspendisse vitae sem quis nunc luctus suscipit. Integer pharetra, risus eu iaculis vestibulum, felis dui auctor erat, id vulputate magna nisi eu libero. Morbi elementum nunc eu nisl placerat tristique. Proin mi eros, maximus vel luctus a, mattis ac nunc. Nulla pharetra, ipsum quis faucibus porta, velit arcu blandit sem, a lacinia nisi eros nec augue. Vivamus et dui eget ipsum euismod vestibulum. Integer tincidunt purus ut arcu tincidunt, nec aliquet purus ornare.</p>
                    <div className='projectIcons'>
                        
                        <i  class="fab portIcon fa-github"></i>
                        <i  class="fas portIcon fa-globe"></i> 

                    </div>
                </div>

            </div>
        </div>
    )
}





export default WunderList;