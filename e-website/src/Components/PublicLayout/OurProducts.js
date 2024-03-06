import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import mango from '../../Assets/Images/mango.jpeg'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'

const OurProducts = () => {
    return (
        <div className='our-product'>
            <div className='coustom_container'>
                <h3 className='popular-product'>Popular Products</h3>
                <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />      eiusmod tempor incididunt ut labore lacus vel facilisis.</p>

                <Tabs>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Snack</Tab>
                        <Tab>Vegitables</Tab>
                        <Tab>Fruits</Tab>
                        <Tab>Bakery</Tab>

                    </TabList>

                    <TabPanel>
                        <div className='first-panel'>
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
                </TabPanel>
                <TabPanel>
                        <div className='first-panel'>
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
                </TabPanel>
                <TabPanel>
                        <div className='first-panel'>
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
                </TabPanel>
                <TabPanel>
                        <div className='first-panel'>
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
                </TabPanel>

                <TabPanel>
                        <div className='first-panel'>
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
                </TabPanel>
            </Tabs>
        </div>
        </div >
    )
}

export default OurProducts