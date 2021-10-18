import Plus from "../images/icon-plus.svg";
import Minus from "../images/icon-minus.svg";

const AddToCart = ({ howMany, increase, decrease, addToCart }) => {
  return (
    <div className="add-to-cart">
      <div className="counter">
        <button onClick={decrease}>
             <img src={Minus} alt=""  />
        </button>
       
        <p>{howMany} </p>
        <button onClick={increase}>
           <img src={Plus} alt=""  />
        </button>
       
      </div>
      <button onClick={addToCart}>
        <img src="/images/icon-cart.svg" alt="" />
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
