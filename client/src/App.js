import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Landing from "./components/User/Landing/Landing";
import Search from './components/User/Search/Search';
import About from './components/User/About/About';
import Contact from './components/User/Contact/Contact';
import FAQ from './components/User/FAQ/FAQ';
import Terms from './components/User/Terms/Terms';
import Sustainability from './components/User/Sustainability/Sustainability';
import Careers from './components/User/Careers/Careers';
import Catalogue from './components/User/Catalogue/Catalogue';
import ProductDetail from "./components/User/ProductDetail/ProductDetail";
import PassRecovery from "./components/PassRecovery/PassRecovery";
import AdminHome from "./components/AdminHome/AdminHome";
import LoginUser from "./components/User/Login/LoginUser";
import PasswordRecovery from './components/User/Login/PasswordRecovery/PasswordRecovery';
import SignUp from "./components/User/Login/SignUp/SignUp";
import FP from "./components/User/Slider/Sliderex/FP";
import MyProfile from "./components/User/MyProfile/MyProfile";
import MyOrders from "./components/User/MyOrders/MyOrders";
import Success from "./components/Success/success";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element = {<Landing/>}></Route>
          <Route path="/success" element = {<Success/>}></Route>
          <Route path="/shop" element = {<Catalogue/>}></Route>
          <Route path="/search" element = {<Search/>}></Route>
          <Route path="/about" element = {<About/>}></Route>
          <Route path="/contact" element = {<Contact/>}></Route>
          <Route path="/faq" element = {<FAQ/>}></Route>
          <Route path="/terms" element = {<Terms/>}></Route>
          <Route path="/sustainability" element = {<Sustainability/>}></Route>
          <Route path="/careers" element = {<Careers/>}></Route>
          <Route path="/fp" element = {<FP/>}></Route>
          <Route exact path="/product/:idProduct" element = {<ProductDetail />}></Route>
          <Route exact path="/admin" element={<Login />} />
          <Route exact path="/admin/home" element={<AdminHome />} />
          <Route exact path="/login" element={<LoginUser />} />
          <Route exact path="/login/restorePassword" element={<PasswordRecovery />} />
          <Route exact path="/login/signUp" element={<SignUp />} />
          <Route exact path="/myProfile" element={<MyProfile />} />
          <Route exact path="/myOrders" element={<MyOrders />} />
          <Route path="/admin/restorePassword" element={<PassRecovery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
