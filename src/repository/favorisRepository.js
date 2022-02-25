import axios from "axios";


 const favorisRepository = {
  async getAllFavoris(name) {
    try {
      const listOfWeatherFavoris = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&lang=FR&appid=8f085abe2764d730b1b07ae3bfd67648`);
      return listOfWeatherFavoris.data;
    } catch (err) {
      console.log("error : ", err);
    }
  },
};

export default favorisRepository
