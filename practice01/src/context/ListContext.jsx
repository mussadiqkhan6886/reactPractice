import React, {createContext, useState} from "react";

export const ListContext = createContext();

export const ListContextProvider = ({children}) => {
    const [list, setList] = useState(JSON.parse(localStorage.getItem("listItems")) || [])
    const [searchValue, setSearchValue] = useState("")
    return <ListContext.Provider value={{list, setList, searchValue}}>
        {children}
    </ ListContext.Provider>
}