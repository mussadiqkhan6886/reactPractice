import {Hero, PopularProducts, SuperQuality, Service, SpecialOffers, CustomerReviews, Subscribe, Footer} from './sections'
import Nav from './components/nav'

const App = () => (  // we use () direct instead of curly bracket when there is no other js data just simply jsx
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Service />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer /> 
    </section>
  </main>
)

export default App
