import React, { useContext, useEffect, useState } from 'react'
import finnHub from '../apis/finnHub'
import { WatchListContext } from '../contextAPI/WatchListContext'

const AutoComplete = () => {

    const [value, setValue] = useState("")
    const [results, setResults] = useState([])
    const {addStock} = useContext(WatchListContext)

    const renderDropdown = () => {
        const dropDownClass = value ? "visible" : "hidden"
        return (
            <ul className={`${dropDownClass} absolute bg-white border-1 border-gray-500 h-[450px] overflow-scroll overflow-x-hidden cursor-pointer`}>
                {results.map(result => (
                    <li onClick={() => {
                        addStock(result.symbol)
                        setValue('')
                    }} key={result.symbol} className='hover:bg-gray-300 p-1 text-[13px]'>{result.description} ({result.symbol})</li>
                ))}
            </ul>
        )
    }

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try{
                const response = await finnHub.get('/search', {
                    params : {
                        q : value
                    }
                })
                if(isMounted){
                    setResults(response.data.result)
                }
            }catch(err){
                console.log(err)
            }
        }
        if(value.length > 0){
            fetchData()
        }  else{
            setResults([])
        }
        console.log(results)
        
        return () => ( isMounted = false )
    }, [value])
    
  return (
    <div className='w-[300px] p-5 mx-auto'>
        <div>
            <input type="text" id="search" value={value} onChange={e => setValue(e.target.value)} placeholder='Search' autoComplete='off' className='p-2 border-1 border-gray-400 rounded w-full'/>
        </div>
        {renderDropdown()}
    </div>
  )
}

export default AutoComplete
