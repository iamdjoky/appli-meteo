import axios from "axios";
import { API_URL, ROUTES } from "../services/constants";

 const favorisRepository = {
  async getAllFavoris(name) {
    try {
      const listOfWeatherFavoris = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8f085abe2764d730b1b07ae3bfd67648`);
      return listOfWeatherFavoris.data;
    } catch (err) {
      console.log("error : ", err);
    }
  },
};

export default favorisRepository
