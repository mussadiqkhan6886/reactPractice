import ShowWeather from "./ShowWeather"

const Details = ({start}) => {
  return (
    <div>
        {start && <ShowWeather />}
    </div>
  )
}
    
export default Details
