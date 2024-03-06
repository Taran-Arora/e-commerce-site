import React from 'react'
import { Link } from 'react-router-dom'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import farm from '../../Assets/Images/frame-circle.svg'
import onion from '../../Assets/Images/onion.png'
import leaf from '../../Assets/Images/leaf.svg'
import roll from '../../Assets/Images/roll-1.png'
import cauliflower from '../../Assets/Images/cauliflower.png'
import apple2 from '../../Assets/Images/apple2.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import secondsection from '../../Assets/Images/ab-1.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import hand from '../../Assets/Images/hand-icon.svg'
import team from '../../Assets/Images/team-2.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import team1 from '../../Assets/Images/team-1.jpg'
 import wave from '../../Assets/Images/bg-shape-6.png'
const About = () => {
    return (
        <div className='about'>
            <div className='about-banner'>
                <div className='coustom_container'>
                    <h3>About Us</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><DoubleArrowIcon /></li>
                        <li>About</li>
                    </ul>
                </div>

                <div className='small-images'>
                    <div className='image-sec'>
                        <img src={farm} className='frame' />
                        <img src={onion} className='onion' />
                        <img src={leaf} className='leaf' />
                        <img src={roll} className='roll' />
                        <img src={cauliflower} className='cauliflower' />
                        <img src={apple2} className='apple2' />





                    </div>
                </div>
                <div className='image-layer'>
                    <img src={wave}/>
                </div>
            </div>
            <div className='second-about'>
                <div className='coustom_container'>
                    <Row >
                        <Col xl={6} lg={6} md={12}>
                            <div className='left-second'>

                                <img src={secondsection} />
                                <div className='assertively'>
                                    <p>“Assertively target market Lorem ipsum is simply free consectetur notted elit sed do eiusmod” George Scholll</p>

                                </div>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={12}>
                            <div className='right-about'>
                                <p className='Organic'>100% Organic Food Provide<ArrowRightAltIcon /></p>
                                <h2>Be healthy & eat fresh<br />
                                    organic food</h2>
                                <p className='market'>Assertively target market lorem ipsum is simply free text available dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply freeutation labore et dolore.</p>
                                <Row>
                                    <Col xl={6} lg={6} md={6}>
                                        <div className='inner-col'>
                                            <img src={hand} />
                                            <h4>Our Mission</h4>
                                            <p>Continually transform virtual meta- methodologies. leverage existing alignments.</p>

                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} md={6}>
                                        <div className='inner-col'>
                                            <img src={hand} />
                                            <h4>Our Mission</h4>
                                            <p>Continually transform virtual meta- methodologies. leverage existing alignments.</p>

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='team-member'>
                <div className='coustom_container'>
                    <div className='banner-team'>
                        <p className='team-title'>Team Members<ArrowRightAltIcon/></p>
                        <h3>Our Online Customer Help! Member</h3>
                        <p className='encounter'>Rationally encounter extremely painful there anyone.</p>
                    </div>
                    <Row>
                        <Col xl={3} lg={3}  md={6} sm={6}>
                            <div className='first-card-team'>
                                <div>
                                <div className='card-image'>
                                    <img src={team} />
                                </div>
                                <div className='name-person'>
                                    <h5>Frances Gilmartin</h5>
                                    <p>CEO & Founder</p>

                                </div>
                                </div>
                                <div className='icons'>
                                    <FacebookIcon className='facebook' />
                                    <InstagramIcon className='instagram' />
                                    <TwitterIcon className='twiter' />
                                    <TelegramIcon className='telegram' />
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={6} sm={6} >
                            <div className='first-card-team'>
                            <div>
                                <div className='card-image'>
                                    <img src={team1} />
                                </div>
                                <div className='name-person'>
                                    <h5>Frances Gilmartin</h5>
                                    <p>CEO & Founder</p>

                                </div>
                                </div>
                                <div className='icons'>
                                    <FacebookIcon className='facebook' />
                                    <InstagramIcon className='instagram' />
                                    <TwitterIcon className='twiter' />
                                    <TelegramIcon className='telegram' />
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3}  md={6} sm={6}>
                            <div className='first-card-team'>

                            <div>
                                <div className='card-image'>
                                    <img src={team} />
                                </div>
                                <div className='name-person'>
                                    <h5>Frances Gilmartin</h5>
                                    <p>CEO & Founder</p>

                                </div>
                                </div>
                                <div className='icons'>
                                    <FacebookIcon className='facebook' />
                                    <InstagramIcon className='instagram' />
                                    <TwitterIcon className='twiter' />
                                    <TelegramIcon className='telegram' />
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={6}  sm={6}>
                            <div className='first-card-team'>
                            <div>
                                <div className='card-image'>
                                    <img src={team1} />
                                </div>
                                <div className='name-person'>
                                    <h5>Frances Gilmartin</h5>
                                    <p>CEO & Founder</p>

                                </div>
                                </div>

                                <div className='icons'>
                                    <FacebookIcon className='facebook' />
                                    <InstagramIcon className='instagram' />
                                    <TwitterIcon className='twiter' />
                                    <TelegramIcon className='telegram' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

         </div>
    )
}

export default About