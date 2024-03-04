import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import InventoryIcon from '@mui/icons-material/Inventory';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import FireTruckIcon from '@mui/icons-material/FireTruck';

const Forth = () => {
    return (
        <div className='forth-section'>
            <div className='coustom_container'>
                <Row>
                    <Col xl={3} lg={3} md={6}>
                        <div className='forth-first'>
                            <div className='text-center p-3'>
                                <LocalAtmIcon />
                            </div>
                            <h3>Payment Secure</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>


                        </div>



                    </Col>
                    <Col xl={3} lg={3} md={6}>
                        <div className='forth-first'>
                            <div className='text-center p-3'>
                                <InventoryIcon />
                            </div>
                            <h3>Product Packing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>


                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={6}>
                        <div className='forth-first'>
                            <div className='text-center p-3'>
                                <HeadsetMicIcon />
                            </div>
                            <h3>24X7 Support</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>


                        </div>
                    </Col>

                    <Col xl={3} lg={3} md={6}>
                        <div className='forth-first'>
                            <div className='text-center p-3'>
                                <FireTruckIcon />
                            </div>
                            <h3>Delivery Day</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>


                        </div>
                        </Col>

                </Row>
            </div>
        </div>
    )
}

export default Forth