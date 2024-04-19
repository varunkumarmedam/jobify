// src/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jobify-backend-wrapper-7323fa1818eb.herokuapp.com/v1", 
});


export default axiosInstance;


