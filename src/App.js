import MainNav from "./components/MainNav";
import MainSection from "./components/MainSection";
import { useState } from "react";
function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const openCart = () => {
    setCartIsOpen(!cartIsOpen);
  };
  return (
    <div className="App">
      <MainNav openCart={openCart} />
      <MainSection cartIsOpen={cartIsOpen} />
    </div>
  );
}

export default App;
