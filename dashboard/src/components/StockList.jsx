import React, { useEffect, useState } from 'react'
import finnHub from '../apis/finnHub'

const StockList = () => {
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZ"])
    const [stock, setStock] = useState();

    useEffect(() => {
        let isMounted = true

        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    watchList.map((symbol) => 
                        finnHub.get("/quote", {
                            params: { symbol }
                        })
                    )
                )
                console.log(responses)
                if (isMounted) {
                    setStock(responses)
                }
            } catch (err) {
                console.error(err)
            }
        }

        fetchData()

        return () => {
            isMounted = false
        }
    }, [])

  return (
    <div>
      <h1>Stock List</h1>
    </div>
  )
}

export default StockList
