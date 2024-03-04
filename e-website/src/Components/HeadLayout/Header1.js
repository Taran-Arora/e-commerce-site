import React, { useEffect, useState } from "react";
import {  Menu } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Accordion, Dropdown } from "react-bootstrap";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header1 = () => {
  const location = useLocation();


//   responsive sidebar modal states
  const [open2, setonOpenModal2] = useState(false);

  const onOpenModal2 = () => setonOpenModal2(true);
  const onCloseModal2 = () => setonOpenModal2(false);





  useEffect(() => {

    // this code contact page header work ..
    if (location.pathname === "/contact") {
      document.body.setAttribute("contact-attribute", "true");
    } else {
      document.body.removeAttribute("contact-attribute");
    }

    if (location.pathname === "/team") {
      document.body.setAttribute("team-attribute", "true");
    } else {
      document.body.removeAttribute("team-attribute");
    }

    if (location.pathname === "/blog") {
      document.body.setAttribute("blog-attribute", "true");
    } else {
      document.body.removeAttribute("blog-attribute");
    }

    if (location.pathname === "/services") {
      document.body.setAttribute("service-attribute", "true");
    } else {
      document.body.removeAttribute("service-attribute");
    }

    if (location.pathname === "/wordpress") {
      document.body.setAttribute("wordpress-attribute", "true");
    } else {
      document.body.removeAttribute("wordpress-attribute");
    }

    if (location.pathname === "/email-hosting") {
      document.body.setAttribute("emailhosting-attribute", "true");
    } else {
      document.body.removeAttribute("emailhosting-attribute");
    }

  }, [location.pathname]);

  useEffect(() => {
    const headerScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (scrollY >= 645) {
        document.body.setAttribute("header-attribute", "true");

      } else {
        document.body.removeAttribute("header-attribute");
      }
    };

    window.addEventListener("scroll", headerScroll);

    return () => {
      window.removeEventListener("scroll", headerScroll);
    };
  }, []);



  const HeaderData = [
    {
      LinkName: "Home",
      LinkUrl: '/',
      dropdown: null
    },
    {
      LinkName: "About",
      LinkUrl: '/',
      dropdown: null
    },
    {
      LinkName: "Services",
      LinkUrl: '',
      dropdown: [
        {
          dropLinkName: "Home Delivery",
          dropLinkUrl: '/'
        },
        {
          dropLinkName: "Free Of Cost",
          dropLinkUrl: '/'
        },

      ],
    },
    {
      LinkName: "Category",
      LinkUrl: '/',
      dropdown: null
    },
    
    {
      LinkName: "Contact us",
      LinkUrl: '/',
      dropdown: null
    },
   
  ];


  return (
    <>
      <div className="top-header">
        <div className="container-layout">
          {/* left top header section  */}

          <div className="left-t-header">
            
          </div>

          {/* right top header section */}
        
        </div>
      </div>

      {/* header work start.... */}

      <header>
        <div className="container-layout">
          <div className="left-header">
            <Link to="/" className="navbar-logo">
                    E-Commerce
            </Link>


            <button onClick={onOpenModal2} type="button" className="btn toggle-button"><Menu /></button>
          </div>

          <div className="right-header">
            <ul className="nav align-items-center">

              {HeaderData.map((item, index) => (


                <li className="nav-item" key={index}>
                  {item.dropdown == null && <Link to={item.LinkUrl} className="nav-link">{item.LinkName} </Link>}

                  {item.dropdown && (
                    <ul className="p-0">
                      <Dropdown>
                        <Dropdown.Toggle className="bg-transparent border-0 text-black nav-link" id="dropdown-basic">
                          {item.LinkName}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {item.dropdown.map((subItem) => (
                            <Link key={subItem.dropLinkName} className="dropdown-item" to={subItem.dropLinkUrl}>{subItem.dropLinkName} </Link>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>


                       
                    </ul>

                    
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="center-header">
            <Link to="/" ><ShoppingCartIcon/>Cart</Link>
          </div>
        </div>
      </header>



      <Modal open={open2} onClose={onCloseModal2}
        classNames={{
          modal: "new_modal_sidebar",
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}>
        <div className="phone-view-header">
          <p>More Services</p>
          <ul className="nav flex-column">
            <Accordion defaultActiveKey="0">

              {HeaderData.map((item, index) => (

                <li className="nav-item" key={index}>
                  {item.dropdown == null && <Link to={item?.LinkUrl} className="nav-link">{item.LinkName} </Link>}

                  {item.dropdown && (
                    <ul className="p-0">

                      <Accordion.Item eventKey="">
                        <Accordion.Header> <span>{item.LinkName} </span> </Accordion.Header>
                        <Accordion.Body>
                          <ul className="p-0">
                            {item.dropdown.map((subItem) => (
                              <Link className="nav-link" key={subItem.dropLinkName} to={subItem.dropLinkUrl}>- {subItem.dropLinkName}</Link>
                            ))}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </ul>
                  )}
                </li>
              ))}
            </Accordion>
          </ul>
        </div>
      </Modal>

    </>
  );
};

export default Header1;
