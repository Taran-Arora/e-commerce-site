import React from 'react'
import { Col, Form, Row } from "react-bootstrap";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Reset = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
  return (
    <section className='log-section'>
    <div className='coustom_container'>
      <Row>
        <Col lg={12}>
          <div className='login-outer'>
            <div className='login-inner'>
              <div className='log-h'>
              <h1 className='reset-pass'>Reset Password</h1>
              </div>
              <Form className='form-login'> 
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
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='log-inp1'
                    placeholder="Confirm Password"
                  />

                  <button className='on-btn' type="button" onClick={handleTogglePassword}>
                    {showPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </button>
                </div>
              </Form>
              <div className='form-btns'>
              <Link to='#' className='login-btn reset-btn'>Reset</Link>
              {/* <Link to='/forgot' className='forgot-btn'>Forgot Password</Link> */}
              </div>

              {/* <div className='nxt-page'>
                <p>Don't have an account?</p>
                <Link to="/register">Register Now</Link>
              </div> */}

            </div>
          </div>

        </Col>
      </Row>

    </div>

  </section>
  )
}

export default Reset