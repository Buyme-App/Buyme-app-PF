import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Landing from "./components/User/Landing/Landing";
import ProductDetail from "./components/User/ProductDetail/ProductDetail";
import PassRecovery from "./components/PassRecovery/PassRecovery";
import AdminHome from "./components/AdminHome/AdminHome";
import LoginUser from "./components/User/Login/LoginUser";
import PasswordRecovery from './components/User/Login/PasswordRecovery/PasswordRecovery';
import SignUp from "./components/User/Login/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path= "/" element = {<Landing/>}></Route>
          <Route exact path= "/productDetail" element = {<ProductDetail/>}></Route>
          <Route exact path="/admin" element={<Login />} />
          <Route exact path="/admin/home" element={<AdminHome />} />
          <Route exact path="/home" element={<LoginUser />} />
          <Route exact path="/home/restorePassword" element={<PasswordRecovery />} />
          <Route exact path="/home/signUp" element={<SignUp />} />
          <Route path="/admin/restorePassword" element={<PassRecovery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
