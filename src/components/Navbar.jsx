import logo from "../assets/logo.png";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQantity, setOpenCart } from "../app/CartSlice";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQantity);

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setShowNavbar(false); // Hide when scrolling down
    } else {
      setShowNavbar(true); // Show only at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center z-[200] transition-all duration-300 ${
          showNavbar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex items-center justify-between nike-container">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="logo/img" className="w-32 h-auto" />
          </div>

          {/* Icons */}
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon className="icon-style text-slate-900 transition-all duration-300" />
            </li>
            <li className="grid items-center">
              <HeartIcon className="icon-style text-slate-900 transition-all duration-300" />
            </li>
            <li className="grid items-center">
              <button
                type="button"
                onClick={onCartToggle}
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon className="icon-style text-slate-900 transition-all duration-300" />
                <div
                  className="absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 bg-slate-100 text-slate-900 shadow-slate-900"
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
