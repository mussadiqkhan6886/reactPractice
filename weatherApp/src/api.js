import axios from "axios";

// ?q=london&appid=


export default axios.create({ 
    baseURL: "https://api.openweathermap.org/data/2.5", 
}
 )