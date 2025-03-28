import Food from "./compenents/Food"
import Footer from "./compenents/Footer"
import Header from "./compenents/Header"
import ListFood from "./compenents/ListFood"

function App() {

  return (
    <>
      <Header />
      <Food food1={'orange'} food2={'mango'} extra={true} />
      <Food />
      <ListFood />
      <Footer />
    </>
  )
}

export default App
