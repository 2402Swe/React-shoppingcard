import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from "react";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import ViewCart from "./components/viewCart";
import { cartContext } from "./components/cartContext";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ViewCart />} />
        </Routes>
      </BrowserRouter>
    </cartContext.Provider>
  );
};

export default App;



