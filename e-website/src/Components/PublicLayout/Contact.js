import React from 'react'
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import email from '../../Assets/Images/email.png';
import phone from '../../Assets/Images/phone.png';
import location from '../../Assets/Images/location.png';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PhoneIcon from '@mui/icons-material/Phone';


const Contact = () => {
  return (

    <div className='main-sec-bread'>
        <div className='sec-bread'>
      <div className='contact-heading'>
          <h2>Contact Us</h2>
          <span><Link className='home-set'>Home</Link>/ Contact Us</span>
      </div>
    </div>

  <Container>
  <div className='main-card-contact'>

    <Row className='card-row'>
  
   
      <Col xl={4} lg={4} md={4} >
        <div className='card-contact'>
          <div className='card-body'>
            <div className='card-img'>
              <img src={email}/>

            </div>
            <div className='data-heading'>
              <h3>Email Adress</h3>
              <p>info@webmail.com<br/>jobs@webexample.com</p>

            </div>
          </div>
        </div>
      </Col>
      <Col xl={4} lg={4} md={4} >
        <div className='card-contact'>
          <div className='card-body'>
            <div className='card-img'>
              <img src={phone}/>

            </div>
            <div className='data-heading'>
              <h3>Phone Number</h3>
              <p>+0123-456789
<br/>+987-6543210

</p>

            </div>
          </div>
        </div>
      </Col>
      <Col xl={4} lg={4} md={4}>
        <div className='card-contact'>
          <div className='card-body'>
            <div className='card-img'>
              <img src={location}/>

            </div>
            <div className='data-heading'>
              <h3>Office Address
</h3>
              <p>18/A, New Born Town
<br/>New York, US

</p>

            </div>
          </div>
        </div>
      </Col>
   

    <div className='main-contact-form'>
      <h4>Get a Quote</h4>
      <form>
        <div className='form-main'>
          <Row>
        
          <Col xl={6}>
            <div className='icon-person'>
            <input className='input-set1' type='text' placeholder='Enter Your Name'/>
            <PersonIcon className='user-icon'/>
            </div>
          </Col>
            <Col xl={6}>
            <div className='icon-person'>
            <input className='input-set1' type='text' placeholder='Enter email address'/>
            <EmailIcon className='user-icon'/>
            </div>

          </Col>   
          <Col xl={6}>
            <div className='icon-person'>
            <input className='input-set1' type='text' placeholder='Select service type'/>
            <ArrowDownwardIcon className='user-icon'/>
            </div>

          </Col>
          <Col xl={6}>
            <div className='icon-person'>
            <input className='input-set1' type='text' placeholder='Enter phone number'/>
            <PhoneIcon className='user-icon'/>
            </div>

          </Col>
          <Col xl={12}>
            <div className='main-text-area'>
            <textarea className='text-area'>
              Enter message
            </textarea>
            <label className='into-info'>
              <input type='checkbox' name='agree'/>
              Save my name, email, and website in this browser for the next time I comment.
            </label>
           

            </div>
            <div className='free-service-btn'>
            <button type='submit'>GET AN FREE SERVICE</button>
            </div>
          
          </Col>

        
          </Row>
        
     
      
        </div>
      </form>
     
    </div>
  
   

    </Row>
    </div>
  </Container>
  <div className='main-map-sec'>
        <div className='map-sec'>
          
        </div>
      </div>


 
</div>
  )
}

export default Contact
