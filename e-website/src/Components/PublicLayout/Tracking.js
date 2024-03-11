import React from 'react'
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RedeemIcon from '@mui/icons-material/Redeem';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

 const Tracking = () => {
  return (
    <div className='main-tracking1-sec'>
    <div className='sec-tracking1'>
      <div className='tracking1-heading'>
          <h2>Tracking</h2>
          <span><Link className='tracking1-set'>Home</Link>/ Tracking</span>
      </div>
    </div>
    <div className='main-cards-tracking'>
        <Container>
            <Row>
                <Col xl={4} lg={4} md={4} sm={4}>
                    <div className='card-body'>
                        <div className='card-tracking'>
                            <h3>Order</h3>
                            <p>#9857</p>
                        </div>
                    </div>
                </Col>
                <Col xl={4} lg={4} md={4}sm={4}>
                    <div className='card-body'>
                        <div className='card-tracking'>
                            <h3>Grasshoppers</h3>
                            <p>#9857</p>
                        </div>
                    </div>
                </Col>
                <Col xl={4}lg={4} md={4}sm={4}>
                    <div className='card-body'>
                        <div className='card-tracking'>
                            <h3>Expected Date</h3>
                            <p>#9857</p>
                        </div>
                    </div>
                </Col>

           
            </Row>
            <div className='main-order-cards'>
                <div className='cards-ditto'>
                    <div className='icon-main'>
                    {/* <CheckCircleIcon className='icon-set22'/> */}
                    </div>
            
                    <div className='circle-main'>
                    <CheckCircleIcon/>
                    <h5>Order <br/> Confirmed</h5>

                   
                        

                    </div>
                  
                    <div className='icon-main'>
                    {/* <CheckCircleIcon className='icon-set22'/> */}
                    </div>
            
                    <div className='circle-main'>
                    <SettingsIcon/>
                    <h5>Order <br/> Confirmed</h5>

                   
                        

                    </div>
                    <div className='icon-main'>
                    {/* <CheckCircleIcon className='icon-set22'/> */}
                    </div>
            
                    <div className='circle-main'>
                    <RedeemIcon className='box-icon'/>
                    <h5>Order <br/> Confirmed</h5>

                   
                        

                    </div>
                    <div className='icon-main'>
                    {/* <CheckCircleIcon className='icon-set22'/> */}
                    </div>
            
                    <div className='circle-main'>
                    <LocalShippingIcon/>
                    <h5>Order <br/> Confirmed</h5>

                   
                        

                    </div>
                    <div className='icon-main'>
                    {/* <CheckCircleIcon className='icon-set22'/> */}
                    </div>
            
                    <div className='circle-main'>
                    <HomeIcon/>
                    <h5>Order <br/> Confirmed</h5>

                   
                        

                    </div>
                    
                  

                </div>
                
            </div>
          
        </Container>
    </div>
    </div>
    
  )
}

export default Tracking