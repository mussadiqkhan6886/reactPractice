import Fav from "./pages/Fav"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {

  return (
    <div className="bg-gray-800 h-full">
      <NavBar />
      <main className="p-7 flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Fav />} />
        </Routes>
      </main>      
    </div>
  )
}

export default App
