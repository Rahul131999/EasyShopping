/**
 * @Author: root
 * @Date:   2022-09-10T00:25:21+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-10T00:25:51+05:30
 */
 import axios from "axios";

 const instance = axios.create({
     baseURL: "http://localhost:8080",
 });

 export default instance;
