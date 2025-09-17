import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../app/CartSlice";

const ShoeCard = ({
  ifSalesExist,
  id,
  color,
  shadow,
  btn,
  rating,
  price, // ✅ fixed here
  title,
  text,
  img,
}) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  return (
    <div
      className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
        ifSalesExist ? "justify-items-start" : "justify-items-center"
      } rounded-xl py-6 px-6 transition-all duration-700 ease-in-out w-full hover:scale-105 min-h-[22rem]`}
    >
      {/* Text Content */}
      <div
        className={`grid items-center ${
          ifSalesExist ? "justify-items-start" : "justify-items-center"
        }`}
      >
        <h1 className="text-slate-200 text-2xl lg:text-3xl md:text-xl font-semibold filter drop-shadow">
          {title}
        </h1>

        <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
          {text}
        </p>

        {/* Price + Buy Now */}
        <div className="flex items-center gap-3 my-2">
          <div className="flex items-center bg-white/80 px-3 py-1 rounded-lg blur-effect-theme">
            <h1 className="text-black text-sm font-medium">${price}</h1>
          </div>
          <button
            type="button"
            className="bg-white opacity-90 blur-effect-theme button-theme px-4 py-1.5 shadow shadow-sky-200 text-sm text-black rounded-md"
            onClick={() => {
              onAddToCart();
              onCartToggle();
            }}
          >
            {btn}
          </button>
        </div>
      </div>

      {/* Shoe Image */}
      <div
        className={`flex items-center ${
          ifSalesExist ? "absolute top-6 right-2" : "justify-center"
        }`}
      >
        <img
          src={img}
          alt={`img/item-img/${id}`}
          className={`${
            ifSalesExist
              ? "h-[17rem] w-auto lg:h-[15rem] md:h-[13rem] sm:h-[11rem]"
              : "h-[15rem] w-auto md:h-[13rem] sm:h-[11rem]"
          }`}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
