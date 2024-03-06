import React from 'react';
import { Col, Row } from "react-bootstrap";
import botshape from '../../Assets/Images/bg-shape-61.png';
import tomatopic from '../../Assets/Images/tomato55.svg';
import onionsub from '../../Assets/Images/onion11.png';
import leavespic from '../../Assets/Images/pata-xs1.svg';
import rollpic from '../../Assets/Images/roll-112.png';
import roll2pic from '../../Assets/Images/roll-23.png';
import caulipic from '../../Assets/Images/cauliflower1.png';
import cartpic from '../../Assets/Images/cart22.svg';
import cartpic2 from '../../Assets/Images/organic11.svg';
import cartpic3 from '../../Assets/Images/milk11.svg';
import cartpic4 from '../../Assets/Images/delivery11.svg';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import totmilk from '../../Assets/Images/icon-10.png';
import totmilk2 from '../../Assets/Images/icon-201.png';
import totmilk3 from '../../Assets/Images/icon-202.png';
import totmilk4 from '../../Assets/Images/icon-203.png';

const Service = () => {
    return (
        <>
            <section className='service-section'>
                <div className='service-banner'>
                    <img src={botshape} alt='shape' className='shape1' />
                    <img src= {tomatopic} alt='tomato' className='tomato1' />
                    <img src={onionsub} alt='onion' className='onion1' />
                    <img src={leavespic} alt='leave' className='leaves1' />
                    <img src={rollpic} alt='rollpic' className='rollpic1' />
                    <img src={roll2pic} alt='rollpic' className='rollpic2' />
                    <img src={caulipic} alt='cauliflower' className='cauli1' />
                    <div className='coustom_container'>
                        <Row>
                            <Col lg={12}>
                                <div className='service-heading'>
                                    <h2>Service Page</h2>
                                    <ul>
                                        <li>Home</li>
                                        <li><KeyboardDoubleArrowRightIcon /></li>
                                        <li>Services</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
            <section className='ser-sec-section'>
                <div className='coustom_container'>
                    <Row>
                        <Col lg={12}>
                            <div className='natural-head'>
                                <h2>We're Provide Natural & Organic Vegetable</h2>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6}>
                            <div className='agri-cul'>
                                <div className='agri-pic'>
                                    <img src={cartpic} alt='cart' />
                                </div>
                                <div className='agri-content'>
                                    <h5>Agriculture products</h5>
                                    <p>Based applications flexible supply chains. evolve principle-centered whiteboard stand-alone.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6}>
                            <div className='agri-cul'>
                                <div className='agri-pic'>
                                    <img src={cartpic2} alt='cart' />
                                </div>
                                <div className='agri-content'>
                                    <h5>Oraganic products</h5>
                                    <p>Based applications flexible supply chains. evolve principle-centered whiteboard stand-alone.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6}>
                            <div className='agri-cul'>
                                <div className='agri-pic'>
                                    <img src={cartpic3} alt='cart' />
                                </div>
                                <div className='agri-content'>
                                    <h5>Milk Sweet products</h5>
                                    <p>Based applications flexible supply chains. evolve principle-centered whiteboard stand-alone.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6}>
                            <div className='agri-cul'>
                                <div className='agri-pic'>
                                    <img src={cartpic4} alt='cart' />
                                </div>
                                <div className='agri-content'>
                                    <h5>Delivery Service</h5>
                                    <p>Based applications flexible supply chains. evolve principle-centered whiteboard stand-alone.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='ability-section'>
                <div className='coustom_container'>
                    <Row>
                        <Col lg={12}>
                            <div className='ability-head'>
                                <h2>Our Working Ability</h2>
                                <p>Assertively target market lorem ipsum is simply free text available dolor incididunt simply free ut labore et dolore.</p>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6} sm={6}>
                            <div className='total-product'>
                                <div className='tproduct-content'>
                                    <div className='num'>
                                        <h3><span>2814K+</span></h3>
                                        <h6>Total Products</h6>
                                    </div>
                                    <div className='total-pic'>
                                        <img src={totmilk} alt='milk' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6} sm={6}>
                            <div className='total-product'>
                                <div className='tproduct-content'>
                                    <div className='num'>
                                        <h3><span>2168K+</span></h3>
                                        <h6>Total Orders</h6>
                                    </div>
                                    <div className='total-pic'>
                                        <img src={totmilk2} alt='milk' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6} sm={6}>
                            <div className='total-product'>
                                <div className='tproduct-content'>
                                    <div className='num'>
                                        <h3><span>2814K+</span></h3>
                                        <h6>Total Visitors</h6>
                                    </div>
                                    <div className='total-pic'>
                                        <img src={totmilk3} alt='milk' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6} sm={6}>
                            <div className='total-product'>
                                <div className='tproduct-content'>
                                    <div className='num'>
                                        <h3><span>2814K+</span></h3>
                                        <h6>Total Delivery</h6>
                                    </div>
                                    <div className='total-pic'>
                                        <img src={totmilk4} alt='milk' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Service;