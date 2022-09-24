import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route index element={<Home />} />
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/product' element={<Product/>} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

reportWebVitals();