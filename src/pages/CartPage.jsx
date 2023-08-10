import React from "react";
import { BiSolidWallet } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "./../slices/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const mycartItems = useSelector((state) => state.cart.cartItems);
  console.log(mycartItems);
  return (
    <section className="p-10 bg-violet-200">
      <h3 className="text-3xl font-bold mb-5">My Cart Items</h3>

      <div className="cartItems">
        {mycartItems.map((item) => (
          <div
            key={item.id}
            className="item flex relative gap-5 cursor-pointer bg-white mb-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all divide-gray-200"
          >
            <div className="image w-48 border-r-2 p-3 border-violet-400 flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                title={item.title}
                className="h-32 w-32 object-contain"
              />
            </div>
            <div className="info p-5">
              <h3 className="text-xl font-bold text-violet-600">
                {" "}
                {item.title}
              </h3>
              <div className="price flex items-center gap-3 text-xl">
                <BiSolidWallet className="text-violet-500" />
                Rs. {item.price}
              </div>
            </div>
            <button
              onClick={() => dispatch(removeItemFromCart(item.id))}
              className="absolute right-3 top-3 h-12 rounded-full w-12 flex items-center justify-center bg-violet-600 text-white"
            >
              <BsTrashFill />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CartPage;
