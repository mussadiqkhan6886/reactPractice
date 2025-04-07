import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} className='object-contain w-full' alt="offer image" width={773} height={687} />
      </div>

      <div className='flex flex-1 flex-col'>
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg"><span className='text-coral-red'>Special</span> Offer</h2>
        <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible saving, we offer unparalleled value that sets us apart.</p>
        <p className="mt-6 lg:max-w-lg info-text ">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing to short of exceptional</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label={'Shop now'} imgUrl={arrowRight} />
          <Button label={'Learn more'} backgroundColor={'bg-white'} textColor={'text-slate-gray'} borderColor={'border-slate-gray'}/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
