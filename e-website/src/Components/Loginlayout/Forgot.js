import React from 'react'
import { Col, Form, Row } from "react-bootstrap";
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <section className='log-section'>
    <div className='coustom_container'>
      <Row>
        <Col lg={12}>
          <div className='login-outer'>
            <div className='login-inner'>
              <div className='log-h'>
              <h1 className='for-pass'>Forgot Password</h1>
              </div>
              <Form className='form-login'>
                <div className='form-icon'>
                  <input type="text" className=" log-inp" placeholder="Email Address" />
                  <EmailIcon />
                </div>
              </Form>
              <div className='form-btns'>
              <Link to='#' className='login-btn forg-btn'>Submit</Link>
              </div>

              <div className='nxt-page'>
                <p>Still no account?</p>
                <Link to="/register">Create new account</Link>
              </div>

            </div>
          </div>

        </Col>
      </Row>

    </div>

  </section>
  )
}

export default Forgot