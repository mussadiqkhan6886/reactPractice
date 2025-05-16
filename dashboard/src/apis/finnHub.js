import axios from 'axios';

const TOKEN = "d0ig4qpr01qrfsafuuigd0ig4qpr01qrfsafuuj0"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
})