import React, { useState, useEffect } from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const ProductsSection = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <section className="">
      <div className="grid grid-cols-5 gap-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white overflow-hidden p-5 pb-10 group shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-200 rounded-md relative"
          >
            <div className="flex justify-center">
              <img src={item.image} className="h-32" alt="" />
            </div>
            <div className="info text-center border-t-2 my-3 border-violet-400 py-5">
              <Link to={`/products/${item.id}`}>
                <h3 className=" text-xl group-hover:text-violet-700 ">
                  {item.title}
                </h3>
              </Link>
              <h2 className="font-bold text-xl">Rs. {item.price}</h2>
              <div
                onClick={() => dispatch(addToCart(item))}
                className=" opacity-0 group-hover:opacity-100 transition-all duration-200 -bottom-16 group-hover:flex group-hover:bottom-5 flex absolute   left-3 right-3  justify-center items-center gap-5 bg-violet-600 text-white px-5 py-3 rounded-md  "
              >
                <BiCart />
                Add to Cart
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
