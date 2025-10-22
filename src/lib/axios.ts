import axios from "axios";

const api = axios.create({
   baseURL: "http://72.60.5.169:8000/api/v1",
   headers: {
      "Content-Type": "application/json",
   },
});

export default api;
