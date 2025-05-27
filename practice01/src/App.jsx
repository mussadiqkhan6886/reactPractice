import Header  from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import { ListContextProvider } from './context/ListContext'

const App = () => {
  
  return (
    <>
    <ListContextProvider>
      <header className="min-w-[500px] bg-blue-600 text-center">
        <Header />
      </header>
      <main className="bg-blue-300  min-h-[300px] min-w-[500px]">
        <Content />
      </main>
      <footer className="min-w-[500px] bg-blue-600 text-center">
        <Footer />
      </footer>
    </ListContextProvider>
      
    </>
  )
}

export default App
