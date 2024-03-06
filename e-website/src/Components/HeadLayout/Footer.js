import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom';
import bucket from '../../Assets/Images/buc.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='upper-footer'>
      <div className='coustom_container'>
          <Row>
            <Col xl={3} lg={3} md={6} sm={6}>
              <div className='first-one'>
              <h3>E-Commerce</h3>

              <img src={bucket} className='fruit-bucket'/>

              </div>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6}>
              <div className='first-one'>
                <h3>Company</h3>
                <Link to="#">About us</Link>
                <Link to="#">Delivery Information</Link>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms & Conditions</Link>
                <Link to="#">Contact us</Link>


              </div>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6}>
              <div className='first-one'>
                <h3>Category</h3>
                <Link to="#">Dairy & Bakery</Link>
                <Link to="#">Fruits & Vegetables</Link>
                <Link to="#">Snacks & Spice</Link>
                <Link to="#">Juice & Drinks</Link>
                <Link to="#">Fast Food</Link>


              </div>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6}>
              <div className='first-one'>
                <h3>Subscribe Our NewsLater</h3>
                <div className='input-div'>
               <input type='text' placeholder='Search here....'/>
               <TelegramIcon/>

               </div>
                <p>E-Commerce is the biggest market of grocery products. Get your daily needs from our store.</p>
            

                <div className='icons'>
                  <FacebookIcon className='facebook'/>
                  <InstagramIcon className='instagram'/>
                  <TwitterIcon className='twiter'/>
                  <TelegramIcon className='telegram'/>
                </div>
              </div>
            </Col>  
          </Row>
      </div>
      </div>

{/* <div className='coustom_container'>
      <div className='down-footer'>
        <div className='' >
          <div className='image-section'>
          <img src={apple} className='apple'/>
          </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Footer