/**
 * @Author: root
 * @Date:   2022-09-09T03:01:09+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-09T15:08:04+05:30
 */



import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useSignupMutation } from "../Services/mainApi";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [signup, { error, isLoading, isError }] = useSignupMutation();

    function handleSubmit(a) {
        a.preventDefault();
        signup({ name, email, password });
    }

    return (
        <Container>
            <Row>
                <Col md={6} className="signup__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
                        <h1>Create an account</h1>
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" value={name} required onChange={(n) => setName(n.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(m) => setEmail(m.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" value={password} required onChange={(p) => setPassword(p.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" disabled={isLoading}>
                                Create account
                            </Button>
                        </Form.Group>
                        <p className="pt-3 text-center">
                            Don't have an account? <Link to="/login">Login</Link>{" "}
                        </p>
                    </Form>
                </Col>
                <Col md={6} className="signup__image--container"></Col>
            </Row>
        </Container>
    );
}

export default Signup;
