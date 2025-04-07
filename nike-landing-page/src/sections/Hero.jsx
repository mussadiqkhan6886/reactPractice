import { useState } from 'react'
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import { shoes, statistics } from '../constants'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section id="home" className="flex justify-center gap-10 flex-col xl:flex-row min-h-screen max-container">
      <div className="xl:w-2/5 relative flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className='text-lg text-red-300 font-montserrat'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px]  font-bold '>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label='Show now' iconUrl={arrowRight} />
        <div className='flex gap-16 justify-start items-start flex-wrap w-full mt-20'>
        {statistics.map((stat) => (
          <div key={stat.label}> 
            <p className='font-palanquin text-4xl font-bold'>{stat.value}</p>
            <p className='font-montserrat leading-7 text-slate-gray'>{stat.label}</p>
          </div>
        ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="big shoe 1" className='object-contain relative z-10' width={610} height={500} />

        <div className='absolute -bottom-[5%] flex sm:gap-6 gap-4 sm:left-[10%] max-sm:px-6'>
        {shoes.map(shoe => (
          <div key={shoe.bigShoe}>
              <ShoeCard imgUrl={shoe} changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg} />
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
