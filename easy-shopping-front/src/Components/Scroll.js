/**
 * @Author: root
 * @Date:   2022-09-27T04:29:11+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-27T04:29:53+05:30
 */
 import { useEffect } from "react";
 import { useLocation } from "react-router-dom";

 function Scroll() {
     const { pathname } = useLocation();
     useEffect(() => {
         window.scrollTo(0, 0);
     }, [pathname]);
     return null;
 }

 export default Scroll;
