import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import first1 from '../../Assets/Images/fifth1.jpeg'
import StarIcon from '@mui/icons-material/Star';

const Fifth = () => {
  return (
    <div className='fifth'>
        <div className='coustom_container'>
                <h3 className='great'>Great Words From People</h3>
                <p className='lorem'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore lacus vel facilisis.


                </p>
                <Row>
                    <Col xl={4} lg={4} md={4} sm={6}>
                        <div className='fifth_first'>
                            <div className='image-div'>
                                <img src={first1}/>
                            </div>
                            <p className='title'>CO Founder</p>
                            <h4>Stephen Smith</h4>
                            <p className='sit'> “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                            facilisis.”
                                        </p>
                            <div className='star-div'>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>

                            </div>
                        </div>  
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6}>
                        <div className='fifth_first'>
                            <div className='image-div'>
                                <img src={first1}/>
                            </div>
                            <p className='title'>CO Founder</p>
                            <h4>Stephen Smith</h4>
                            <p className='sit'> “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                            facilisis.”
                                        </p>
                            <div className='star-div'>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>

                            </div>
                        </div>  
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6}>
                        <div className='fifth_first third-card'>
                            <div className='image-div'>
                                <img src={first1}/>
                            </div>
                            <p className='title'>CO Founder</p>
                            <h4>Stephen Smith</h4>
                            <p className='sit'> “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                            facilisis.”
                                        </p>
                            <div className='star-div'>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>

                            </div>
                        </div>  
                    </Col>
                </Row>
        </div>
    </div>
  )
}

export default Fifth