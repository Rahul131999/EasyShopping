/**
 * @Author: root
 * @Date:   2022-09-07T20:11:12+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-09T16:49:33+05:30
 */
import {React, useState} from 'react';
import { Container, Row, Col, Form, Button, Alert} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../Services/mainApi";

function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isError, isLoading, error }] = useLoginMutation();

  function handleLogin(a){
    a.preventDefault();
    login({ email, password });
  }

  return(
    <Container>
      <Row>
        <Col md={6} className="login__form--container">
          <Form style={{width:'100%'}} onSubmit={handleLogin}>
            <h1>Please Login</h1>
            {isError && <Alert variant="danger">{error.data}</Alert>}
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" value={email} required onChange={(e)=> setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" value={password} required onChange={(p)=> setPassword(p.target.value)} />
            </Form.Group>

            <Form.Group>
              <Button type="submit" disabled={isLoading}>Login</Button>
            </Form.Group>
            <p className="pt-3 text-center">
              Don't have an account?<Link to="/signup"> Create Account</Link>{" "}
            </p>
          </Form>
        </Col>
        <Col md={6} className="login__image--container"></Col>
      </Row>
    </Container>
  );
};

export default Login;
