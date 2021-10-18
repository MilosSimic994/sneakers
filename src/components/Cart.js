import React from "react";
import Trash from "../images/icon-delete.svg";
import { useGlobalContext } from "../Context";

const Cart = () => {
  const {cartItem, setCartItem} = useGlobalContext()
  return (
    <div className="cart">
      <h2>Cart</h2>

      {cartItem ? (
        <div className="cart-item">
          <img src="/images/image-product-1-thumbnail.jpg" alt="" />
          <div>
            <h5>Limited Edition</h5>
            <p>
              {`$125.00 x ${cartItem} `} <span>${125 * cartItem}</span>
            </p>
          </div>
          <button>
          <img
            src={Trash}
            alt=""
            className="delete"
            onClick={() => setCartItem(0)}
          />
            </button>
         
          <button>Checkout</button>
        </div>
      ) : (
        <h3>Cart is Empty!</h3>
      )}
    </div>
  );
};

export default Cart;
