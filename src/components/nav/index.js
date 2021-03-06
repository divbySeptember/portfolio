import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Logo from '../logo/index';
import { BrowserRouter as Router , Route, Link, Switch} from 'react-router-dom'; 
import Portfolio from "../portfolio";
import About from "../about";
import Contact from '../contact';
import WunderList from '../projects/wunderlist';
import LifeGPA from '../projects/lifegpa';
import BGP from '../projects/bgp';
import './index.css'




const Nav = () => {
  return (
    <Router>
      <Navbar className='navbar'>
        <Navbar.Brand href="/"><Logo /></Navbar.Brand> 
        <ul>
            <li>
              <Link className='item' to="/">Portfolio</Link>
            </li>
            <li>
              <Link className='item' to="/about">About</Link>
            </li>
            <li>
              <Link className='item' to="/contact">Contact</Link>
            </li>
            |
            <li>
              <a href="http://www.github.com/divbyseptember"><i className="navIcon" class="fab fa-github"></i></a>
              <a href="http://www.twitter.com/anthony_dev1"><i className="navIcon" class="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/in/anthonydev1/"><i className="navIcon" class="fab fa-linkedin"></i></a>
            </li>
           
        </ul>                                   
          
      </Navbar>

      
      <div>
        <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route  path="/about" component={About} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/wunderlist" component={WunderList} />
        <Route  path="/lifegpa" component={LifeGPA} />
        <Route  path="/bgp" component={BGP} />
        </Switch>
      </div>
    </Router>
   
     
    
  );
};

export default Nav;
