import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import UpdateProduct from "./pages/UpdateProduct";
import Product from "./pages/Product";

export default function Routes_() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/update-product" element={<UpdateProduct />} />
        <Route path="/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
