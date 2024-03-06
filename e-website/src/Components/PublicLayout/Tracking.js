import React from 'react'
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from '@mui/material';

export const Tracking = () => {
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
                <Col xl={4}>
                    <div className='card-body'>
                        <div className='card-tracking'>
                            <h3>Order</h3>
                            <p>#9857</p>
                        </div>
                    </div>
                </Col>
                <Col xl={4}>
                    <div className='card-body'>
                        <div className='card-tracking'>
                            <h3>Order</h3>
                            <p>#9857</p>
                        </div>
                    </div>
                </Col>
                <Col xl={4}>
                    <div className='card-body'>
                        <div className='card-tracking'>
                            <h3>Order</h3>
                            <p>#9857</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </div>
    
  )
}
