/**
 * @Author: root
 * @Date:   2022-09-10T01:07:29+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-27T06:02:07+05:30
 */
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "react-alice-carousel/lib/alice-carousel.css";
import { Container, Row, Col, Badge, ButtonGroup, Form, Button } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import { LinkContainer } from "react-router-bootstrap";
import axios from '../axios';
import Load from '../Components/Load';
import { useAddToCartMutation } from "../Services/mainApi";
import Toast from "../Components/Toast";
import './Product.css';

function Product(){

  const {id} = useParams();
  const user = useSelector(state => state.user);
  const [product, setProduct] = useState(null);
  const [addToCart, { isSuccess }] = useAddToCartMutation();

  const handleStart = (a) => a.preventDefault();
    useEffect(() => {
        axios.get(`/products/${id}`).then(({ data }) => {
            setProduct(data.product);
        });
    }, [id]);

    if (!product) {
        return <Load />;
    }




  const images = product.pictures.map((picture) => <img className="product__carousel--image" src={picture.url} onDragStart={handleStart} />);


  return(
    <Container className="pt-4" style={{ position: "relative" }}>
            <Row>
                <Col lg={6}>
                    <AliceCarousel mouseTracking items={images} controlsStrategy="alternate" />
                </Col>
                <Col lg={6} className="pt-4">
                    <h1>{product.name}</h1>
                    <p>
                        <Badge bg="primary">{product.category}</Badge>
                    </p>


                    <p className="product__price">${product.price}</p>


                    {user && !user.isAdmin && (
                        <ButtonGroup style={{ width: "90%" }}>
                            <Form.Select size="lg" style={{ width: "40%", borderRadius: "0" }}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                            <Button size="lg" onClick={() => addToCart({ userId: user._id, productId: id, price: product.price, image: product.pictures[0].url })} >
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    )}
                    {user && user.isAdmin && (
                        <LinkContainer to={`/product/${product._id}/edit`}>
                            <Button size="lg">Edit Product</Button>
                        </LinkContainer>
                    )}

                    <p style={{ textAlign: "justify" }} className="py-3">
                        <strong>Description:</strong> {product.description}
                    </p>
                    { isSuccess && <Toast bg="info" title="Added to cart" body={`${product.name} is in your cart`} />}
                </Col>
            </Row>
        </Container>
  )
};

export default Product;
