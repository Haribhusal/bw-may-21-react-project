import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { addToCart } from "./slices/cartSlice";
import { useDispatch } from "react-redux";

function Root() {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      {/* <button onClick={() => dispatch(addToCart({ id: 2, title: 'Fan' }))}>Please add an item to redux store</button>
      <button onClick={() => dispatch(addToCart({ id: 3, title: 'Projector' }))}>Please add an item to redux store</button> */}
      {/* <HeroSection /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
