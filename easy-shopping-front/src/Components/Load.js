/**
 * @Author: root
 * @Date:   2022-09-11T20:56:21+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-11T23:21:58+05:30
 */
 import React from "react";
 import { Spinner } from "react-bootstrap";
 function Load() {
     return (
         <div className="loading-container" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
             <Spinner animation="grow" />
         </div>
     );
 }

 export default Load;
