import axios from "axios";

export const getToken = async () => {
   const response = await axios.get("http://localhost:3001/token");
   return response.data;
 };