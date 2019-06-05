import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 71428b7fe178ca5a765692218663c24577f55ca0338fa85955a09e782e151d61"
  }
});
