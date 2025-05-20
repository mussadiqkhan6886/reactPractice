import Search from "./components/search/Search"
import { ResultProvider } from "./context/ResultContext"
function App() {

 
  return (
    <>
    <ResultProvider>
      <Search />
    </ResultProvider>
    </>
  )
}

export default App
