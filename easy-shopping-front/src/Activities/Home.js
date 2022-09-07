/**
 * @Author: root
 * @Date:   2022-09-07T19:13:04+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-08T00:03:49+05:30
 */
import React from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import Menu from "../Menu";
import "./Home.css";


function Home(){
  return(
    <div>
            <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png"  />

            <div className="recent-products-container container mt-4">
                <h2>Categories</h2>
                <Row>
                    {Menu.map((menu) => (
                        <LinkContainer to={`/category/${menu.name.toLocaleLowerCase()}`}>
                            <Col md={6}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${menu.img})`, gap: "10px" }} className="category-tile">
                                    {menu.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>
            <div className="featured-products-container container mt-4">
                <h2>Last products</h2>

                <div>
                    <Link to="/category/all" style={{ textAlign: "right", display: "block", textDecoration: "none" }}>
                        See more {">>"}
                    </Link>
                </div>
            </div>
            <div className="sale__banner--container mt-4">
                <img src="https://firebasestorage.googleapis.com/v0/b/shopping-2bc98.appspot.com/o/pexels-ylanite-koppens-934063.jpg?alt=media&token=541f19ae-f571-4126-9d6a-76b4f64dabda" />
            </div>
        </div>
  );
};

export default Home;
