// base da url https://api.themoviedb.org/3/
// url da api movie/now_playing?api_key=0fb20ef1e6334ea50fd5e8d6a47dd211&language=pt-Br
import axios from "axios";

const api = axios.create({
    baseURL:' https://api.themoviedb.org/3/'
});

export default api;