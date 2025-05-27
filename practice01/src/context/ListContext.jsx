import React, {createContext, useState, useEffect} from "react";

export const ListContext = createContext();

export const ListContextProvider = ({children}) => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const URL = "http://localhost:3000/items"
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(URL)
                if(!response.ok) throw Error("Did not get any data from serve")
                const data = await response.json()
                setList(data)
                setError(null)
            }
            catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
            (async () => await fetchData())()
        
    }, [])

    const [searchValue, setSearchValue] = useState("")
    return <ListContext.Provider value={{list, setList, searchValue, setSearchValue, loading, error, URL, setError}}>
        {children}
    </ ListContext.Provider>
}