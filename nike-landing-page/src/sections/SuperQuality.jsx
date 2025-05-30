import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col  gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, out meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality innovation, and a touch of elegance.</p>
        <p className="mt-6 lg:max-w-lg info-text ">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
          <Button label={'View details'} />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoeQuality" width={570} height={570} />
      </div>
    </section>
  )
}

export default SuperQuality
