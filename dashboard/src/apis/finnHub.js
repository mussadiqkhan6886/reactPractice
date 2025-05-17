import axios from 'axios';

const TOKEN = "d0k73fhr01qqlggvgo20d0k73fhr01qqlggvgo2g"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
})