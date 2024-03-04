import React, { useState } from "react";
import food from "../assets/Food.json";
import Product from "./product";

const Home = () => {
  const [products] = useState(food);

  return (
    <div className="container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Home;