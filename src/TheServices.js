import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "66d36dafdeb9769a99c785462aaf7343",
  },
});
export const api = {
  get(url) {
    return axiosInstance.get(url);
  },
};
