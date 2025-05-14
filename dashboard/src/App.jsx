import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StockDetailPage from './pages/StockDetailPage'
import StockOverviewPage from './pages/StockOverviewPage'

const App = () => {

  // const api = 'd0ig4qpr01qrfsafuuigd0ig4qpr01qrfsafuuj0';

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StockOverviewPage />} />
          <Route path='/details/:symbol' element={<StockDetailPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
