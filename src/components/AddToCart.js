import Plus from "../images/icon-plus.svg";
import Minus from "../images/icon-minus.svg";

const AddToCart = ({ howMany, increase, decrease, addToCart }) => {
  return (
    <div className="add-to-cart">
      <div className="counter">
        <img src={Minus} alt="" onClick={decrease} />
        <p>{howMany} </p>
        <img src={Plus} alt="" onClick={increase} />
      </div>
      <button onClick={addToCart}>
        <img src="/images/icon-cart.svg" alt="" />
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
