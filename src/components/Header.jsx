import React from "react";
import { BiLogoBitcoin, BiSearch, BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let cartItemCount = useSelector((state) => state.cart.cartItems.length);
  return (
    <header className="flex justify-between items-center gap-10 px-10 py-5 shadow-md">
      <Link to={"/"}>
        <div className="logo flex items-center text-violet-700 font-bold">
          <BiLogoBitcoin />
          <h3>BitCommerce</h3>
        </div>
      </Link>
      <div className="searchForm">
        <form className="flex items-center relative">
          <input
            type="text"
            placeholder="Search Products, Categories..."
            className="px-3 py-1 rounded-md border-2 border-violet-400"
          />
          <button type="submit" className="border-none absolute right-5 z-10 ">
            <BiSearch />
          </button>
        </form>
      </div>
      <div className="navigationMenu">
        <ul className="flex gap-3 text-slate-500 ">
          <li>
            <a href="#" className="hover:text-slate-800">
              Home
            </a>
          </li>
          <li>
            <Link to="/products" className="hover:text-slate-800">
              Products
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-slate-800">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-800">
              Offers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-800">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="buttons flex gap-3 items-center">
        <Link to={"/my-cart"}>
          <div className="cart relative">
            <BiCart className="text-3xl text-violet-500" />
            <span className="absolute -top-3 text-white -right-3 bg-violet-600 rounded-md text-[12px] px-1 ">
              {cartItemCount}
            </span>
          </div>
        </Link>

        <div className="">Login</div>
        <div className="">Register</div>
      </div>
    </header>
  );
};

export default Header;
