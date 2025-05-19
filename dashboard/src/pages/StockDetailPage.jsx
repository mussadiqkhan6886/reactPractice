import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import finnHub from '../apis/finnHub'

// API failed

const StockDetailPage = () => {
  const { symbol } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try{
      console.log(symbol)
      const date = new Date()
      const dateInSeconds = Math.floor(date.getTime() /1000)
      let oneDay
      if(date.getDay() === 6){
         oneDay = dateInSeconds - 2 * 60 * 60 * 24
      }
      else if(date.getDay() === 0){
         oneDay = dateInSeconds - 3 * 60 * 60 * 24
      }else{
        oneDay = dateInSeconds - 60 * 60 * 24
      }
      const response = await finnHub.get('/stock/candle', {
        params: {
          symbol: symbol,
          from : oneDay,
          to : dateInSeconds,
          resolution : 30 
        }
      })
      console.log(response)
    }catch(err){
        console.log(err)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      <h1>Details Page {symbol}</h1>
      <h1 className='text-3xl'>API failed</h1>
    </div>
  )
}

export default StockDetailPage
