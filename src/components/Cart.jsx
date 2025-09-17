import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartState,
  setCloseCart,
  selectCartItems,
  setClearCartItems,
  setGetTotals,
  selectTotalAmount,
  selectTotalQantity,
} from "../app/CartSlice";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQantity);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(setCloseCart({ cartState: false }));
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

  const onCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Build WhatsApp message
let message = "🛍️ *New Order Received!* 🛍️%0A%0A";
message += "👤 *Customer Details:*%0A";
// Optionally, add customer info here if available
// message += `Name: ${customerName}%0A`;
// message += `Email: ${customerEmail}%0A%0A`;

message += "🛒 *Order Details:*%0A%0A";

cartItems.forEach((item, index) => {
  message += `*${index + 1}. ${item.title || item.name}*%0A`;
  message += `  🔹 Price: $${item.price}%0A`;
  message += `  🔹 Quantity: ${item.cartQuantity}%0A`;
  message += `  🔹 Subtotal: $${item.price * item.cartQuantity}%0A`;
  message += "--------------------%0A";
});

message += `%0A📦 *Total Quantity*: ${totalQTY}%0A`;
message += `💰 *Total Amount*: $${totalAmount}%0A`;
message += `%0A✨ Thank you for your order! ✨%0A`;
message += `🛒 We will process your order soon.`;

// Fixed WhatsApp number
const phoneNumber = "918390646565";

// Open WhatsApp with one single message
window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${ifCartState
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-8"
          }`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
            }`}
        >
          <CartCount
            totalQTY={totalQTY}
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
          />

          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              {/* Cart Items List */}
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>

              {/* Bottom Checkout Section */}
              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                    ${totalAmount}
                  </h1>
                </div>

                <div className="grid items-center gap-2">
                  <p className="text-sm font-medium text-center">
                    Taxes and Shipping Will Calculate At Shipping
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white"
                    onClick={onCheckout}
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
