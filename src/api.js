import axios from "axios";
console.log(process.env.YT_API_KEY);
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAatGwBk1UeBej3UUMmtD3SM3sXFxecJXQ",
  },
});

export default request;
