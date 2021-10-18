import { useState } from "react";
import Menu from "../images/icon-menu.svg";
import Logo from "../images/logo.svg";
import Avatar from "../images/image-avatar.png";
import Cart from "../images/icon-cart.svg";
import MobMenu from "./MobMenu";

const MainNav = ({ openCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="main-nav">
      {isOpen && <MobMenu setIsOpen={setIsOpen} />}
      <div className="leftMenu">
        <button> <img src={Menu} alt="" onClick={() => setIsOpen(!isOpen)} /></button>
        
        <img src={Logo} alt="" />
        <ul>
          <li>
            <a href="/">Collection</a>
          </li>
          <li>
            <a href="/">Men</a>
          </li>
          <li>
            <a href="/">Women</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div className="rightMenu">
        <button  onClick={openCart}>
        <img src={Cart} alt="" />
        </button>
        
        <img src={Avatar} alt="" />
      </div>
    </nav>
  );
};

export default MainNav;
