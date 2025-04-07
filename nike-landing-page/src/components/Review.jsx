import { star } from "../assets/icons"

const Review = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center flex-col items-center">
        <img className="rounded-full object-cover w-[120px] h-[120px]" src={imgURL} alt={customerName} />
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="flex gap-2">
            <img src={star} alt="star" className="object-contain m-0" /> 
            <p className="text-xl font-montserrat text-slate-gray">
                ({rating})
            </p>
        </div>
        <h3 className="font-bold text-2xl mt-2 font-palanquin text-center">{customerName}</h3>
    </div>
  )
}

export default Review
