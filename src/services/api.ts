// import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://localhost:5000",
// });
// ---------------
// import axios from "axios";

// export const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
// });



import axios from "axios";

console.log(
  "API URL:",
  import.meta.env.VITE_API_URL
);

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});