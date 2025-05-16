import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StockDetailPage from './pages/StockDetailPage'
import StockOverviewPage from './pages/StockOverviewPage'
import { WatchListContextProvider } from './contextAPI/WatchListContext'

const App = () => {

  // const api = 'd0ig4qpr01qrfsafuuigd0ig4qpr01qrfsafuuj0';

  return (
    <main>
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<StockOverviewPage />} />
            <Route path='/detail/:symbol' element={<StockDetailPage />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  )
}

export default App
