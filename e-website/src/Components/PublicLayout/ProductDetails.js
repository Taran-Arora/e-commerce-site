import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import diet1 from '../../Assets/Images/diet11.jpeg';
import diet2 from '../../Assets/Images/diet12.jpeg';
import dietsm1 from '../../Assets/Images/diet111.jpeg';
import dietsm2 from '../../Assets/Images/diet121.jpeg';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import mango from '../../Assets/Images/mango.jpeg'



const ProductDetails = () => {
    return (
        <>
            <section className='pro-section'>
                <div className='coustom_container'>
                    <Row>
                        <div className='products-name'>
                            <h2>Product Details</h2>
                        </div>
                        <Col lg={6}>
                            <div className='pro-detals-pic'>
                                <Tabs>
                                    <TabPanel>
                                        <div className='dieting-pics'>
                                            <img src={diet1} alt='pics' />
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className='diet-pics'>
                                            <img src={diet2} alt='pics' />
                                        </div>
                                    </TabPanel>
                                    <TabList>
                                        <Tab>
                                            <div className='sm-diet'>
                                                <img src={dietsm1} alt='pics' className='diet-pics' />
                                            </div>
                                        </Tab>
                                        <Tab>
                                            <div className='sm-diet'>
                                                <img src={dietsm2} alt='pics' className='diet-pics' />
                                            </div>
                                        </Tab>
                                    </TabList>
                                </Tabs>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='product-content'>
                                <div className='pro-detal-head'>
                                    <h3>Seeds Of Change Oraganic Quinoa, Brown</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?</p>
                                </div>
                                <div className='pro-detal-review'>
                                    <div className='rating-star'>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </div>
                                    <div className='detail-list'>
                                        <ul>
                                            <li>
                                                <label>Brand
                                                    <span>:</span>
                                                </label>
                                                Brand Name
                                            </li>
                                            <li>
                                                <label>Flavor
                                                    <span>:</span>
                                                </label>
                                                Super Saver Pack
                                            </li>
                                            <li>
                                                <label>Diet Type
                                                    <span>:</span>
                                                </label>
                                                Vegetarian
                                            </li>
                                            <li>
                                                <label>Weight
                                                    <span>:</span>
                                                </label>
                                                200 Grams
                                            </li>
                                            <li>
                                                <label>Speciality
                                                    <span>:</span>
                                                </label>
                                                Gluten Free, Sugar Free
                                            </li>
                                            <li>
                                                <label>Info
                                                    <span>:</span>
                                                </label>
                                                Egg Free, Allergen-Free
                                            </li>
                                            <li>
                                                <label>Item
                                                    <span>:</span>
                                                </label>
                                                1
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='detail-pro-price'>
                                        <span className='dollar-p'>$120.25</span>
                                        <span className='dollar-l'>$123.25</span>
                                    </div>
                                    <div className='detail-size'>
                                        <h6><span>Size</span>/<span>Weight</span> :</h6>
                                        <div className='detail-weight'>
                                            <ul>
                                                <li className='active'>50kg</li>
                                                <li>80kg</li>
                                                <li>120kg</li>
                                                <li>200kg</li>
                                            </ul>
                                            {/* <Tabs>
                                                <TabList>
                                                    <Tab>50kg</Tab>
                                                    <Tab>80kg</Tab>
                                                    <Tab>180kg</Tab>
                                                    <Tab>200kg</Tab>
                                                </TabList>
                                            </Tabs> */}
                                        </div>
                                    </div>
                                    <div className='cart-btn'>
                                        <div className='add-cart'>
                                            <Link to='#'>Add To Cart</Link>
                                        </div>
                                        <div className='whislist'>
                                            <FavoriteBorderIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='discrip-section'>
                <div className='coustom_container'>
                    <Row>
                        <Col lg={12}>
                            <div className='discrip-data'>
                                <Tabs>
                                    <TabList>
                                        <Tab>Description</Tab>
                                        <Tab>Information</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className='des-content'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Error in vero sapiente odio, error dolore vero temporibus
                                                consequatur, nobis veniam odit dignissimos consectetur quae in
                                                perferendis doloribusdebitis corporis, eaque dicta, repellat amet, illum adipisci vel perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                                            <h3>Packaging & Delivery</h3>
                                            <p className='des-con-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Error in vero perferendis dolor! Quis vel consequuntur repellat distinctio
                                                rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam
                                                odit laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className='info-content'>
                                            <div className='info-con-p'>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente doloribus debitis corporis, eaque dicta, repellat amet, illum adipisci vel perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                                            </div>
                                            <div className='info-details'>
                                                <ul>
                                                    <li>
                                                        <label>Brand
                                                            <span>:</span>
                                                        </label>
                                                        Brand Name
                                                    </li>
                                                    <li>
                                                        <label>Flavor
                                                            <span>:</span>
                                                        </label>
                                                        Super Saver Pack
                                                    </li>
                                                    <li>
                                                        <label>Diet Type
                                                            <span>:</span>
                                                        </label>
                                                        Vegetarian
                                                    </li>
                                                    <li>
                                                        <label>Weight
                                                            <span>:</span>
                                                        </label>
                                                        200 Grams
                                                    </li>
                                                    <li>
                                                        <label>Speciality
                                                            <span>:</span>
                                                        </label>
                                                        Gluten Free, Sugar Free
                                                    </li>
                                                    <li>
                                                        <label>Info
                                                            <span>:</span>
                                                        </label>
                                                        Egg Free, Allergen-Free
                                                    </li>
                                                    <li>
                                                        <label>Item
                                                            <span>:</span>
                                                        </label>
                                                        1
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='pop-section'>
                <div className='coustom_container'>
                    <Row>
                        <Col lg={12}>
                            <div className='pop-product'>
                                <div className='pop-heading'>
                                    <h2>Popular Products</h2>
                                    <p>Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et viverra maecenas
                                        accumsan lacus vel facilisis.</p>
                                </div>
                                <div className='pop-cards'>
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
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;