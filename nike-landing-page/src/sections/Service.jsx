import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Service = () => {
  return (
    <section className="flex max-container justify-center flex-wrap gap-9">
      {services.map(service => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Service
