/**
 * @Author: root
 * @Date:   2022-09-07T19:04:14+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-09T16:51:32+05:30
 */
import React from 'react'


import { Navbar, Button, Nav, NavDropdown, Container } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import {LinkContainer} from "react-router-bootstrap";

import { logout } from '../Functionality/userCut';
import './Navig.css';

function Navig(){

  const user = useSelector((state) => state.user);
  const dismiss = useDispatch();

  function handleLogout(){
    dismiss(logout());
  }

  return(

    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand >Easy Shopping</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            { !user && (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}

            { user && (
              <NavDropdown title = {`${user.name}`} id="basic-nav-dropdown">
                {user.isAdmin && (
                  <>
                    <LinkContainer to="/dash">
                      <NavDropdown.Item> Dashboard </NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/new">
                      <NavDropdown.Item> Advertise Product </NavDropdown.Item>
                    </LinkContainer>
                  </>
                )}

                {user.isAdmin && (
                  <>
                    <LinkContainer to="/cart">
                      <NavDropdown.Item> Cart </NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/orders">
                      <NavDropdown.Item> My Orders </NavDropdown.Item>
                    </LinkContainer>
                  </>
                )}

                <NavDropdown.Divider />
                  <Button variant="danger" className="logout-btn" onClick={()=> handleLogout}> Logout </Button>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};

export default Navig;
