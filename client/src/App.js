import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Landing from "./components/User/Landing/Landing";
import PassRecovery from "./components/PassRecovery/PassRecovery";
import AdminHome from "./components/AdminHome/AdminHome";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path= "/" element = {<Landing/>}></Route>
          <Route exact path="/admin" element={<Login />} />
          <Route exact path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/restorePassword" element={<PassRecovery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
