/**
 * @Author: root
 * @Date:   2022-09-07T17:37:59+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-07T19:55:34+05:30
 */



import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navig from "./Components/Navig";
import Home from "./Activities/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navig />
      <Routes>
        <Route index element={ <Home />} />
        <Route path="*" element={ <Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
