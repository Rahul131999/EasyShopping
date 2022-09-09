/**
 * @Author: root
 * @Date:   2022-09-07T17:37:59+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-09T23:18:39+05:30
 */



import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navig from "./Components/Navig";
import Home from "./Activities/Home";
import Login from "./Activities/Login";
import Signup from "./Activities/Signup";
import { useSelector } from "react-redux";
import PostProduct from "./Activities/PostProduct";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <BrowserRouter>
      <Navig />
      <Routes>
        <Route index element={ <Home />} />
        { !user && (
          <>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </>
        )}
        <Route path="/new" element={<PostProduct />} />

        <Route path="*" element={ <Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
