import React from 'react'
import { Col, Form, Row } from "react-bootstrap";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import _fetch from '../../config/api';
import { api_url } from '../../config/config';
import toasted from '../../config/toast';


const Login = () => {

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  const loginSubmit = async () => {

    const data = {
      'email': email,
      'password': password
    }
    let res = await _fetch(`${api_url}login`, 'POST', data, {});

    if (res.status === 200) {
      toasted.success(res?.data?.message);
      // localStorage.setItem('token',); 
      localStorage.setItem('auth', 'true');
      navigate('/');
    }
    else if (res.status === 400) {
      toasted.error(res?.data?.message);
    }
  }

  return (
    <section className='log-section'>
      <div className='coustom_container'>
        <Row>
          <Col lg={12}>
            <div className='login-outer'>
              <div className='login-inner'>
                <div className='log-h'>
                  <h1>Login</h1>
                </div>
                <Form className='form-login'>
                  <div className='form-icon'>
                    <input type="text" className="log-inp" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <EmailIcon />
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
                </Form>
                <div className='form-btns'>
                  <Link to='#' className='login-btn' onClick={loginSubmit}>Login</Link>
                  <Link to='/forgot' className='forgot-btn'>Forgot Password</Link>
                </div>

                <div className='nxt-page'>
                  <p>Don't have an account?</p>
                  <Link to="/register">Register Now</Link>
                </div>

              </div>
            </div>

          </Col>
        </Row>

      </div>

    </section>
  )
}

export default Login