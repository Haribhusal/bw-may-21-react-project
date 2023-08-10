import React, { useState } from "react";
import { BiCart, BiSolidWallet } from "react-icons/bi";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const SingleProductPage = () => {
  const dispacther = useDispatch();
  const [singleProductData, setSingleProductData] = useState({});
  const params = useParams();

  fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then((res) => res.json())
    .then((json) => setSingleProductData(json));

  return (
    <main className="p-10">
      <div className="info flex gap-10 items-center">
        <div className="image">
          <img
            src={singleProductData.image}
            alt={singleProductData.title}
            className="h-96 object-contain"
          />
        </div>
        <div className="text">
          <h3 className=" font-bold text-2xl text-violet-600">
            {singleProductData.title}
          </h3>
          <p className="w-1/2 my-5">{singleProductData.description}</p>

          <div className="price mb-5 flex gap-3 items-center text-2xl ">
            <BiSolidWallet />
            Rs. {singleProductData.price}
          </div>
          <div
            onClick={() => dispacther(addToCart(singleProductData))}
            className="items-center gap-3 bg-violet-600 text-white rounded-md px-5 py-3 shadow-md inline-flex "
          >
            <BiCart />
            Add to Cart
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;
