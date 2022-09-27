/**
 * @Author: root
 * @Date:   2022-09-10T00:56:42+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-10T00:57:32+05:30
 */
 import React from "react";
 import { Badge, Card } from "react-bootstrap";
 import { LinkContainer } from "react-router-bootstrap";

 function Preview({ _id, category, name, pictures }) {
     return (
         <LinkContainer to={`/product/${_id}`} style={{ cursor: "pointer", width: "13rem", margin: "10px" }}>
             <Card style={{ width: "20rem", margin: "10px" }}>
                 <Card.Img variant="top" className="product-preview-img" src={pictures[0].url} style={{ height: "150px", objectFit: "cover" }} />
                 <Card.Body>
                     <Card.Title>{name}</Card.Title>
                     <Badge bg="warning" text="dark">
                         {category}
                     </Badge>
                 </Card.Body>
             </Card>
         </LinkContainer>
     );
 }

 export default Preview;
