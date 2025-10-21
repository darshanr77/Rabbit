import { IoMdClose } from "react-icons/io";
import CartItems from "../cart/CartItems";

const Cart = ({ cartOpen, toggleCart }) => {
  return (
    // Cart
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[35rem] h-full bg-[#e9ebf1] shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCart}>
          <IoMdClose className="h-6 w-6 cursor-pointer text-gray-600" />
        </button>
      </div>

      {/* Cart contents with scrollable area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl absolute top-4 left-8 font-semibold mb-4">Your Cart</h2>
        {/* Component for Cart Contents */}
        <CartItems />
      </div>

      {/* Checkout button fixed at the bottom */}
      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full cursor-pointer bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default Cart;
