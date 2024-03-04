import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "./cartContext";

const ViewCart = () => {
  const { cart } = useContext(cartContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <>
      <h1 className="text-center text-3xl font-bold my-5">Cart Products</h1>
      <div className="w-11/12 mx-auto space-y-5 bg-gray-100 p-5 rounded">
        {cart.map((product, index) => (
          <div key={index} className="flex flex-row">
            <div>
              <img
                src={product.image}
                alt={`${product.name} - Image`}
                width={100}
              />
            </div>
            <div className="items-center mx-8 my-5">
              <h3 className="text-2xl">{product.name}</h3>
              <p className="text-xl">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-5 text-2xl my-10">
        Total Amount:
        <span className="font-bold mx-2 text-red-500">₹{total}</span>
      </div>
    </>
  );
};

export default ViewCart;