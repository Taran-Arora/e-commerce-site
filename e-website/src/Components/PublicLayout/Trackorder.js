import { Container } from '@mui/material';
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import delivery from '../../Assets/Images/delivery.jpg';

const Trackorder = () => {
  return (
    <div className='main-track-order'>
    <div className='sec-track'>
    <div className='track-heading'>
        <h2>Track Order</h2>
        <span><Link className='home-link'>Home</Link>/ Track Order</span>
    </div>
  </div>
  <div className='sec-order'>
    <Container>
        <Row>
            <Col xl={6} lg={6} md={6}>
                <div className='main-shoes'>
                    <div className='shoes-img'>
                        <img src={delivery}/>
                    
                    </div>

                </div>
            </Col>
            <Col xl={6} lg={6} md={6}> 
                <div className='main-track-heading'>
                    <div className='track-heading'>
                        <h2>TRACK YOUR ORDER</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className='track-field'>
                        <label>Order ID</label>
                        <input className='form-control' type='text' placeholder='Order ID'/>
                    
                    </div>
                    <div className='track-field'>
                        <label>Billing Email</label>
                        <input className='form-control' type='text' placeholder='Billing Email'/>
                    
                    </div>
                    <div className='track-btn'>
                        <button type='submit'>Track Order</button>
                    </div>

                </div>
            </Col>
        </Row>
    </Container>
  </div>
  </div>
  )
}

export default Trackorder