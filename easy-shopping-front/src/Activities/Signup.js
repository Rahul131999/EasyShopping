/**
 * @Author: root
 * @Date:   2022-09-07T20:27:34+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-07T20:45:25+05:30
 */
import React from "react";

function Signup(){
  return(
    <Container>
      <Row>
        <Col md={6} className="login__form--container">
          <Form style={{width:'100%'}}>
            <h1>Create your Own Account</h1>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" value={mail} required onChange={(e)=> setMail(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" value={pass} required onChange={(p)=> setPass(p.target.value)} />
            </Form.Group>

            <Form.Group>
              <Button type="submit">Login</Button>
            </Form.Group>
            <p>
              Don't have an account?<Link to="/signup"> Create Account</Link>{" "}
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
