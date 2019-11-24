import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import Card from 'react-bootstrap/Card'
import '../index.css'



const Thumbnail = (props) => {
  return (
    <div className="project">
      <Link to={props.link} className='link'>
        <Card className="firstCard">
          <Card.Img variant="top" src={props.image} className="newImg" />
          <Card.Body>
            <Card.Footer className="cardFooter">
              <Card.Title>{props.title}</Card.Title>
            </Card.Footer>
            
            <Card.Text className='text'>{props.description}</Card.Text>
            
          </Card.Body>
        </Card>

        
      </Link>

    
      
      
    
    </div>
  );
}
 
export default Thumbnail;