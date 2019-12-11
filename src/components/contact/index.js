import React from 'react';
import Contacts from '../../icons/wd3.svg'
import {Form, Button} from 'react-bootstrap'
import './index.css'

const Contact = () => {



    const handlesubmit = (e) => {
        e.preventDefault()
    }


    return(
        <div className='contactMe'>
            <img src={Contacts} />
            <div className='contactText'>
                <h1 className='newHeader'> ~ Contact<span className='folio'>Me</span> ~</h1>
                <Form name="contact" onSubmit={handleSubmit} netlify>
                <Form.Group controlId="formBasicEmail">
                   
                    <Form.Control type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group controlId="formBasicName">
                   
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                    <Form.Control className="message" as="textarea" placeholder="Your Message" />
                </Form.Group>
                <Button className='btn' type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        </div>
    )
}


export default Contact;