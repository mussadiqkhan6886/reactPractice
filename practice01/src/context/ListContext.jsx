import React, {createContext, useState} from "react";

export const ListContext = createContext();

export const ListContextProvider = ({children}) => {
    const [list, setList] = useState([
        {
            id: 1,
            item: "Apple 1kg",
            checked: true
        },
        {
            id: 2,
            item: "Mango 1kg",
            checked: false
        },
        {
            id: 3,
            item: "Banana 1kg",
            checked: false
        },
    ])
    return <ListContext.Provider value={{list, setList}}>
        {children}
    </ ListContext.Provider>
}