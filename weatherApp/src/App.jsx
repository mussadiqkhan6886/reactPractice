import Search from "./components/search/Search"
import { ResultProvider } from "./context/ResultContext"
import Details from "./components/details"
function App() {

 
  return (
    <>
    <ResultProvider>
      <Search />
      <Details />
    </ResultProvider>
    </>
  )
}

export default App
