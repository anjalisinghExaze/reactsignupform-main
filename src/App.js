import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Details from "./components/Details";
import Errror from "./components/Errror";
import { Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";
import Users from "./components/Admin";
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Signup />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Errror />} />
        <Route path="/edit" element={<EditUser />} />
        <Route path="/Users" element={<Users />} />
         
      </Routes>
    </>
  );
}

export default App;
