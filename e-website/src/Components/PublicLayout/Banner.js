import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bucket from '../../Assets/Images/bucket.png'
import Typewriter from 'typewriter-effect';

const Banner = () => {

    return (
        <div className='banner-section'>
            <div className='coustom_container'>
                <Row>
                    <Col xl={6} lg={6} md={8}>
                        <div className='left-banner'>
                            <h4><span>100%</span>Organic Fruits</h4>
                            <h1>Explore Fresh &
                                <Typewriter
                                    options={{
                                        strings: ['Juicy Fruits', 'Fresh Vegitables'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                                </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                beatae consequuntur.</p>


                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={4}>
                        <div className='right-banner'>
                            <img src={bucket} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Banner