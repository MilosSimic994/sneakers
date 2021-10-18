import { useContext, createContext, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [cartItem, setCartItem] = useState(0);
    const [cartIsOpen, setCartIsOpen] = useState(false);

    const openCart = (    ) => {
      
      setCartIsOpen(!cartIsOpen);
    };
return (
    <AppContext.Provider value={{cartItem, setCartItem, openCart, cartIsOpen}}>
        {children}
    </AppContext.Provider>
)
}


export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

export {AppContext, AppProvider}