import axios from "axios";

const api = axios.create({
   baseURL: "https://72.60.5.169:8000/api/v1",
   headers: {
      "Content-Type": "application/json",
   },
});

export default api;
