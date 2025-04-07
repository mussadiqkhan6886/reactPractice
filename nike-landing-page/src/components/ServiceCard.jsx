const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex flex-1 sm:w-[350px] sm:min-w-[350px] w-full  flex-col rounded-2xl shadow-3xl px-10 py-16">
        <div className="flex w-11 h-11 bg-coral-red justify-center items-center rounded-full">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="font-bold mt-5 font-palanquin text-3xl leading-normal">{label}</h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard
