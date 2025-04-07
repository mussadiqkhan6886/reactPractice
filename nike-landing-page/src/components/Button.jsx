const Button = ({label, iconUrl, backgroundColor = 'bg-coral-red', textColor = 'text-white', borderColor = 'border-coral-red', fullWidth}) => {
  return (
    <button className={`flex justify-center items-center text-lg ${backgroundColor} px-6 py-3 ${textColor} rounded-full leading-none ${borderColor} font-montserrat border gap-2 ${fullWidth && 'w-full'}`}>
      {label}
      {iconUrl && <img className="h-5 w-5 ml-2 rounded-full" src={iconUrl} alt="icon Button" /> }
    </button>
  )
}
export default Button
