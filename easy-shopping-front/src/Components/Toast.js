/**
 * @Author: root
 * @Date:   2022-09-11T22:36:24+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-11T22:40:31+05:30
 */
 import React, { useState } from "react";
 import { Toast, ToastContainer } from "react-bootstrap";
 import "./Toast.css";

 function ToastMessage({ bg, title, body }) {
     const [show, setShow] = useState(true);
     return (
         <ToastContainer position="bottom-right" className="toast-container">
             <Toast bg={bg} onClose={() => setShow(false)} show={show} delay={3000} autohide>
                 <Toast.Header>
                     <strong className="me-auto">{title}</strong>
                     <small>now</small>
                 </Toast.Header>
                 <Toast.Body>{body}</Toast.Body>
             </Toast>
         </ToastContainer>
     );
 }

 export default ToastMessage;
