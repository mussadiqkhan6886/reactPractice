import ShowWeather from "./ShowWeather"

const Details = ({start}) => {
  return (
    <>
        {start && <ShowWeather />}
    </>
  )
}
    
export default Details
