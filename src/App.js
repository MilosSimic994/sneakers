import MainNav from "./components/MainNav";
import MainSection from "./components/MainSection";
import { useState } from "react";
function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const openCart = (e) => {
    
    setCartIsOpen(!cartIsOpen);
  };
  return (
    <div className="App">
      <MainNav openCart={openCart} />
      <MainSection cartIsOpen={cartIsOpen} openCart={openCart}/>
    </div>
  );
}

export default App;
