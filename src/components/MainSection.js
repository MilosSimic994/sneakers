import { useState, useRef, useEffect } from "react";
import heroImg from "../dataImg";
import LeftArrow from "../images/icon-previous.svg";
import RightArrow from "../images/icon-next.svg";
import CloseIcon from "../images/icon-close.svg";
import AddToCart from "./AddToCart";
import Cart from "./Cart";

const MainSection = ({ cartIsOpen }) => {
  // const [heroImg, setHeroImg] = useState([]);
  const [counter, setCounter] = useState(0);
  const [cartItem, setCartItem] = useState(0);
  const [howMany, setHowMany] = useState(0);
  const [isMainImgClick, setIsMainImgClick] = useState(false);

  const mainImg = useRef(null);
  const modalImg = useRef(null);

  const checkNumber = (number) => {
    if (number > heroImg.length - 1) {
      return 0;
    }
    if (number < 0) {
      return heroImg.length - 1;
    }
    return number;
  };

  const prevImgHandler = () => {
    let newCounter = counter - 1;
    setCounter(checkNumber(newCounter));
  };
  const nextImgHandler = () => {
    let newCounter = counter + 1;
    setCounter(checkNumber(newCounter));
  };
  const increase = () => {
    setHowMany(howMany + 1);
  };
  const decrease = () => {
    setHowMany(howMany - 1);
    if (howMany <= 0) {
      setHowMany(0);
    }
  };

  const addToCart = () => {
    setCartItem(howMany);
    setHowMany(0);
  };
  const changeThumbnail = (e) => {
    mainImg.current.src = e.target.getAttribute("src");
    console.log(mainImg);
    document
      .querySelectorAll(".thumbnail")
      .forEach((img) => img.classList.remove("active"));
    e.target.classList.add("active");
  };
  const changeThumbnailModal = (e) => {
    modalImg.current.src = e.target.getAttribute("src");
    console.log(mainImg);
    document
      .querySelectorAll(".thumbnail")
      .forEach((img) => img.classList.remove("active"));
    e.target.classList.add("active");
  };

  const closeModalImg = (e) => {
    if (e.target.classList.contains("modal-mainImg")) {
      setIsMainImgClick(false);
    }
  };

  return (
    <div className="main-section">
      {isMainImgClick && (
        <div className="modal-mainImg" onClick={closeModalImg}>
          <img src={heroImg[counter].url} alt="" ref={modalImg} />
          <div className="thumbnail-container">
            <span
              className="close-btn"
              onClick={() => setIsMainImgClick(false)}>
              <img src={CloseIcon} alt="" />
            </span>
            {heroImg.map((img) => {
              return (
                <img
                  className="thumbnail"
                  src={img.url}
                  key={img.name}
                  alt=""
                  onClick={changeThumbnailModal}
                />
              );
            })}
          </div>
        </div>
      )}
      {cartIsOpen && <Cart cartItem={cartItem} setCartItem={setCartItem} />}

      <div className="hero-section">
        <img
          src={heroImg[counter].url}
          alt=""
          ref={mainImg}
          onClick={() => setIsMainImgClick(true)}
        />
        <div className="slider-control">
          <img src={LeftArrow} alt="" onClick={prevImgHandler} />
          <img src={RightArrow} alt="" onClick={nextImgHandler} />
        </div>
        <div className="thumbnail-container">
          {heroImg.map((img) => {
            return (
              <img
                className="thumbnail"
                src={img.url}
                key={img.name}
                alt=""
                onClick={changeThumbnail}
              />
            );
          })}
        </div>
      </div>
      <div>
        <div className="product-desc">
          <h4>sneakers company</h4>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="price">
            <div className="current-price">
              <p>$125.00</p>
              <p className="discount">50%</p>
            </div>
            <p className="old-price">$255.00</p>
          </div>
        </div>
        <AddToCart
          howMany={howMany}
          increase={increase}
          decrease={decrease}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default MainSection;
