import React from 'react'
import { Col, Form, Row } from "react-bootstrap";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Link } from 'react-router-dom';    

const Register = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
    const [password1, setPassword1] = useState("");
    const [showPassword1, setShowPassword1] = useState(false);
  
    const handleTogglePassword1 = () => {
      setShowPassword1(!showPassword1);
    };
  return (
    <section className='log-section'>
    <div className='coustom_container'>
      <Row>
        <Col lg={12}>
          <div className='login-outer reg-out'>
            <div className='login-inner'>
              <div className='log-h log-hr'>
              <h1>Register</h1>
              </div>
              <Form className='form-login'>
              <div className='form-icon'>
                  <input type="text" className=" log-inp" placeholder="First Name" />
                  <PersonIcon />
                </div>
                <div className='form-icon'>
                  <input type="text" className=" log-inp" placeholder="Last Name" />
                  <PersonIcon />
                </div>
                <div className='form-icon'>
                  <input type="text" className=" log-inp" placeholder="Email Address" />
                  <EmailIcon />
                </div>
                <div className='form-icon'>
                  <input type="number" className=" log-inp" placeholder="Phone No." />
                  <PhoneIcon />
                </div>
                <div className='form-icon'>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='log-inp1'
                    placeholder="Password"
                  />

                  <button className='on-btn' type="button" onClick={handleTogglePassword}>
                    {showPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </button>
                </div>
                <div className='form-icon'>
                  <input
                    type={showPassword1 ? "text" : "password1"}
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    className='log-inp1'
                    placeholder="Confirm Password"
                  />

                  <button className='on-btn' type="button" onClick={handleTogglePassword1}>
                    {showPassword1 ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </button>
                </div>
              </Form>
              <div className='form-btns form2-btns'>
              <Link to='#' className='login-btn regis-btn'>Sign up</Link>
              {/* <Link to='#' className='forgot-btn'>Forgot Password</Link> */}
              </div>

              <div className='nxt-page'>
                <p>Already have an account?</p>
                <Link to="/login">Login</Link>
              </div>

            </div>
          </div>

        </Col>
      </Row>

    </div>

  </section>    
  )
}

export default Register