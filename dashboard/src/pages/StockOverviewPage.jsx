import React from 'react'
import StockList from '../components/StockList'
import AutoComplete from '../components/AutoComplete'

const StockOverviewPage = () => {
  return (
    <div>
      <h1>StockOverview Page</h1>
      <AutoComplete />
      <StockList />
    </div>
  )
}

export default StockOverviewPage
