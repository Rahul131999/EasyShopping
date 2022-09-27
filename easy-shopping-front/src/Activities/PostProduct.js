/**
 * @Author: root
 * @Date:   2022-09-09T16:35:42+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-27T05:07:16+05:30
 */
import React, {useState} from 'react';
import './PostProduct.css';
import { useCreateProductMutation } from '../Services/mainApi';
import { Alert, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

function PostProduct(){

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImages] = useState([]);
    const [imgToRemove, setImgToRemove] = useState(null);
    const navigate = useNavigate();
    const [postProduct, { isError, error, isLoading, isSuccess }] = useCreateProductMutation();

    function handleSubmit(a){
      a.preventDefault();
        if (!name || !description || !price || !category || !images.length) {
            return alert("Please fill out all the fields");
        }
        postProduct({ name, description, price, category, images }).then(({ data }) => {
            if (data.length > 0) {
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            }
        });
    };

    function handleRemoveImg(image){
      setImgToRemove(image.public_id);
        axios
            .delete(`/images/${image.public_id}/`)
            .then((res) => {
                setImgToRemove(null);
                setImages((prev) => prev.filter((img) => img.public_id !== image.public_id));
            })
            .catch((e) => console.log(e));
    };

    function showWidget(){
      const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dn7g1u2cl",
                uploadPreset: "ogiavsef",
            },
            (error, result) => {
                if (!error && result.event === "success") {
                    setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
                }
            }
        );
        widget.open();
    };

    return(
      <Container>
            <Row>
                <Col md={6} className="new-product__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
                        <h1 className="mt-4">Post a Product</h1>
                        {isSuccess && <Alert variant="success">Product created with succcess</Alert>}
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group className="mb-3">
                            <Form.Label>Product name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name of the product" value={name} required onChange={(n) => setName(n.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Product description</Form.Label>
                            <Form.Control as="textarea" placeholder="Product description" style={{ height: "100px" }} value={description} required onChange={(d) => setDescription(d.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Price($)</Form.Label>
                            <Form.Control type="number" placeholder="Price ($)" value={price} required onChange={(p) => setPrice(p.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" onChange={(c) => setCategory(c.target.value)}>
                            <Form.Label>Category</Form.Label>
                            <Form.Select>
                                <option disabled selected>
                                    -- Select One --
                                </option>
                                <option value="top">top</option>
                                <option value="bottom">bottom</option>
                                <option value="shoe">shoe</option>
                                <option value="accessory">accessory</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Button type="button" onClick={showWidget}>
                                Upload Images
                            </Button>
                            <div className="images-preview-container">
                                {images.map((image) => (
                                    <div className="image-preview">
                                        <img src={image.url} />
                                        {imgToRemove != image.public_id && <i className="fa fa-times-circle" onClick={() => handleRemoveImg(image)}></i>}
                                    </div>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" disabled={isLoading || isSuccess}>
                                Post Product
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={6} className="new-product__image--container"></Col>
            </Row>
        </Container>

    );
  };

export default PostProduct;
