import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import mango from '../../Assets/Images/mango.jpeg'
import {Link} from 'react-router-dom'

const Wishlist = () => {
    return (
        <div className='wishlist'>
            <div className='wish-banner'>
            <div className='coustom_container'>
            <Row>
                                <Col xl={3} lg={4} md={6} sm={6}>


                                    <div className='first-card'>
                                        <div className='image-div'>
                                            <img src={mango} />
                                           <p className='new-badge'>New</p>
                                            <div className='add-cart-div'>
                                            <Link to="/wish-list">   <FavoriteBorder className='wish-list' /></Link>

                                                <button className='add-cart'>
                                                    <ShoppingCartIcon />
                                                </button>
                                            </div>
                                        </div>

                                        <p className='title'>Vegitables</p>
                                        <h5 className='discription'>Fresh organic villa farm lomon
                                            500gm pack</h5>
                                        <h3 className='mrp'>$125    </h3>

                                    </div>

                             </Col>
                             <Col xl={3} lg={4} md={6} sm={6}>


                                     <div className='first-card'>
                                        <div className='image-div'>
                                            <img src={mango} />
                                           <p className='new-badge'>New</p>
                                            <div className='add-cart-div'>
                                            <Link to="/wish-list">   <FavoriteBorder className='wish-list' /></Link>

                                                <button className='add-cart'>
                                                    <ShoppingCartIcon />
                                                </button>
                                            </div>
                                        </div>

                                        <p className='title'>Vegitables</p>
                                        <h5 className='discription'>Fresh organic villa farm lomon
                                            500gm pack</h5>
                                        <h3 className='mrp'>$125    </h3>

                                    </div>

                             </Col>
                             <Col xl={3} lg={4} md={6} sm={6}>


                                     <div className='first-card'>
                                        <div className='image-div'>
                                            <img src={mango} />
                                           <p className='new-badge'>New</p>
                                            <div className='add-cart-div'>
                                            <Link to="/wish-list">   <FavoriteBorder className='wish-list' /></Link>

                                                <button className='add-cart'>
                                                    <ShoppingCartIcon />
                                                </button>
                                            </div>
                                        </div>

                                        <p className='title'>Vegitables</p>
                                        <h5 className='discription'>Fresh organic villa farm lomon
                                            500gm pack</h5>
                                        <h3 className='mrp'>$125    </h3>

                                    </div>

                             </Col>
                             <Col xl={3} lg={4} md={6} sm={6}>


                                     <div className='first-card'>
                                        <div className='image-div'>
                                            <img src={mango} />
                                           <p className='new-badge'>New</p>
                                            <div className='add-cart-div'>
                                            <Link to="/wish-list">   <FavoriteBorder className='wish-list' /></Link>

                                                <button className='add-cart'>
                                                    <ShoppingCartIcon />
                                                </button>
                                            </div>
                                        </div>

                                        <p className='title'>Vegitables</p>
                                        <h5 className='discription'>Fresh organic villa farm lomon
                                            500gm pack</h5>
                                        <h3 className='mrp'>$125    </h3>

                                    </div>

                             </Col>
                             </Row>
            </div>
            </div>
            <div className='text-center show-more-div'>
            <button>Show More</button>
            </div>

        </div>
    )
}

export default Wishlist