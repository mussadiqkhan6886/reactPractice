import React, { useEffect, useState } from 'react'
import finnHub from '../apis/finnHub'

const StockList = () => {
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZ"])
    const [stock, setStock] = useState();

    useEffect(() => {
        let isMounted = false
        const fetchData = async () => {
            const responses = []
            try{
                const response = await finnHub.get("/quote", {
                    params: {
                        symbol: "MFST"
                    }
                })
                responses.push(response)
                
                const response2 = await finnHub.get("/quote", {
                    params: {
                        symbol: "AMZ"
                    }
                })
                responses.push(response2)
                const response3 = await finnHub.get("/quote", {
                    params: {
                        symbol: "GOOGL"
                    }
                })
                responses.push(response3)
                console.log(responses)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()

        return () => isMounted = false
    }, [])

  return (
    <div>
      <h1>Stock List</h1>
    </div>
  )
}

export default StockList
