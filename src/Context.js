import { useContext, createContext, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [cartItem, setCartItem] = useState(0);
return (
    <AppContext.Provider value={{cartItem, setCartItem}}>
        {children}
    </AppContext.Provider>
)
}


export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

export {AppContext, AppProvider}