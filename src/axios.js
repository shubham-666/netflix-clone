import axios from "axios";

const instance = axios.create({
       // https://www.themoviedb.org/
       
baseURL: "https://api.themoviedb.org/3",

});

export default instance;