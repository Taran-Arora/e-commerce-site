import React from 'react'
import { Col, Form, Row } from "react-bootstrap";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api_url } from '../../config/config';
import _fetch from '../../config/api';
import toasted from '../../config/toast';

const Register = () => {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const SubmitRegister = async () => {

    // const csrfToken = getCookie('csrftoken');

    let data = {
      'firstname': firstName,
      'lastname': lastName,
      'email': email,
      'number': phone,
      'password': password,
      'confirm_password': confirmPassword,
    }
    let res = await _fetch(`${api_url}register`, 'POST', data, {});
    console.log('res', res);
console.log('res?.status',res?.status);
    if (res?.status === 200) {

      localStorage.setItem('auth', 'true');
      toasted.success(res?.data?.message);
      navigate('/');

    } else if (res?.status === 400) {

      toasted.error(res?.data?.message);
    }

  }

  //   const getCookie = (name) => {
  //     const cookieValue = document?.cookie;
  //     if (cookieValue) {
  //         const cookieRow = cookieValue.split('; ')
  //             .find(row => row.startsWith(name));
  //         if (cookieRow) {
  //             return cookieRow.split('=')[1];
  //         }
  //     }
  //     return null; 
  // };


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
                    <input type="text" className=" log-inp" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                    <PersonIcon />
                  </div>
                  <div className='form-icon'>
                    <input type="text" className=" log-inp" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                    <PersonIcon />
                  </div>
                  <div className='form-icon'>
                    <input type="text" className=" log-inp" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <EmailIcon />
                  </div>
                  <div className='form-icon'>
                    <input type="number" className=" log-inp" placeholder="Phone No." onChange={(e) => setPhone(e.target.value)} value={phone} />
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
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                  <Link to='#' className='login-btn regis-btn' onClick={SubmitRegister}>Sign up</Link>
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