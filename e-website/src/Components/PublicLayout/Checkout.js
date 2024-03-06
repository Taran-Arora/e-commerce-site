import React from 'react'
import { Col, Row } from "react-bootstrap";
import valuepouch from '../../Assets/Images/10.jpg';
import StarIcon from '@mui/icons-material/Star';
import cardimg from '../../Assets/Images/paymentall.png';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <section className='checkout-section'>
            <div className='coustom_container'>
                <Row>
                    <Col xl={4} lg={4}>
                        <div className='check-summary'>
                            <h4>Summary</h4>
                            <div className='check-sum-content'>
                                <div className='check-sub-total'>
                                    <span>Sub-Total</span>
                                    <span>$</span>
                                </div>
                                <div className='delivery-charge'>
                                    <span>Delivery Charges</span>
                                    <span>$</span>
                                </div>
                                <div className='total-amt'>
                                    <b>Total Amount</b>
                                    <b>$</b>
                                </div>
                            </div>
                            <div className='checkout-product'>
                                <div className='product-inner'>
                                    <div className='product-pic'>
                                        <img src={valuepouch} alt='pouch' />
                                    </div>
                                    <div className='product-pic-detail'>
                                        <h6>Dates Value Pack Pouch</h6>
                                        <div className='product-rating'>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                        <span>$</span>
                                    </div>
                                </div>
                                <div className='product-inner'>
                                    <div className='product-pic'>
                                        <img src={valuepouch} alt='pouch' />
                                    </div>
                                    <div className='product-pic-detail'>
                                        <h6>Smoked Honey Spiced Nuts</h6>
                                        <div className='product-rating'>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                        <span>$</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={8} lg={8}>
                        <div className='returning'>
                            <div className='return-inner'>
                                <h4>Billing Details</h4>
                                <form>
                                    <Row>
                                        <Col lg={6}>
                                            <div className='form-email'>
                                                <lable>First Name</lable>
                                                <input type='text' className='form-control' placeholder='Enter your first name' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form-email'>
                                                <lable>Last Name</lable>
                                                <input type='text' className='form-control' placeholder='Enter your last name' />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='form-email'>
                                                <label>Address</label>
                                                <input type='text' className='form-control' placeholder='Enter your address' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form-email'>
                                                <label>City</label>
                                                <select className='form-control'>
                                                    <option selected disabled>City Name</option>
                                                    <option>City 1</option>
                                                    <option>City 2</option>
                                                    <option>City 3</option>
                                                    <option>City 4</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form-email'>
                                                <label>Post Code</label>
                                                <input type='number' className='form-control' placeholder='Post code' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form-email'>
                                                <label>Country</label>
                                                <select className='form-control'>
                                                    <option selected disabled>Country Name</option>
                                                    <option>Country 1</option>
                                                    <option>Country 2</option>
                                                    <option>Country 3</option>
                                                    <option>Country 4</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form-email'>
                                                <label>State</label>
                                                <select className='form-control'>
                                                    <option selected disabled>State Name</option>
                                                    <option>State 1</option>
                                                    <option>State 2</option>
                                                    <option>state 3</option>
                                                    <option>State 4</option>
                                                </select>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} lg={4} md={6}>
                        <div className='delivery-methods'>
                            <h4>Delivery Method</h4>
                            <p>Please select the preferred shipping method to use on this order.</p>
                            <div className='ratio-mark'>
                                <div className='fre-ship'>
                                    <span>Free Shipping</span>
                                    <span className='ship-radio'>
                                        <input type='radio' name="fav_language" className='in-radio' />
                                        <label>Rate - $</label>
                                    </span>
                                </div>
                                <div className='flat-rates'>
                                    <span>Flat Rate</span>
                                    <span className='ship-radio'>
                                        <input type='radio' name="fav_language" className='in-radio' />
                                        <label>Rate - $</label>
                                    </span>
                                </div>
                            </div>
                            <div className='un-commt'>
                                <span>Add Comments About Your Order</span>
                                <textarea name='your-comment' placeholder='Comment'></textarea>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={6}>
                        <div className='payment-method'>
                            <h4>Payment Method</h4>
                            <p>Please select the preferred payment method to use on this order.</p>
                            <div className='pay-method'>
                                <span className='cash-on'>
                                    <input type='radio' name="fav_language" className='in-radio' />
                                    <label>Cash On Delivery</label>
                                </span>
                                <span className='cash-on'>
                                    <input type='radio' name="fav_language" className='in-radio' />
                                    <label>UPI</label>
                                </span>
                                <span className='cash-on'>
                                    <input type='radio' name="fav_language" className='in-radio' />
                                    <label>Bank Transfer</label>
                                </span>
                            </div>
                            <div className='pic-card'>
                                <img src={cardimg} alt='card' />
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={12}>
                        <div className='checkin-buttons'>
                            <Link to='#'>Place Order</Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Checkout;