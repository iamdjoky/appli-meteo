import React, { Component } from "react";
import { connect } from "react-redux";
import { addFavoris } from '../store/reducers/FavorisReducer'
import axios from "axios";

class Position extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      latitude: null,
      longitude: null,
      status :null,
      Recherche: [],
      Weather: null,
      Favoris: '',
    };
    this.handleChange = this.handleChange.bind(this);
}

  submitForm(){
      this.props.addFavoris({Favoris: this.state.Favoris})
  };

  componentDidMount(){
    this.setState({ listOfFavoris: this.props.listOfFavoris, id: this.props.listOfFavoris.length + 1 });
  };


  handleChange(value){
    this.setState({ Favoris: value.target.value });
  }

  getLocation(){
    if (!navigator.geolocation) {
      this.setState({status:'Geolocation is not supported by your browser'});
    } else {
    //   this.setState({status:'Recherche..'});
      navigator.geolocation.getCurrentPosition(async(position) => {
        this.setState({latitude:position.coords.latitude});
        this.setState({longitude:position.coords.longitude});
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        try {
          const listOfWeathers = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=FR&appid=8f085abe2764d730b1b07ae3bfd67648`);
          this.setState({Weather:listOfWeathers});
          console.log(listOfWeathers);
      } catch (err) {
          console.log('error :', err);
      }
      }, () => {
        this.setState({status:'Unable to retrieve your location'});
      });
    }
  }

  render() {
    return (
        <div className="Position">
        <button className="button_position" onClick={()=>this.getLocation()}>Recherchez la météo où vous vous trouvez</button>
        <p>{this.state.status}</p>
        {this.state.Weather && (
          <> <h1>Vous vous trouvez à {this.state.Weather.data.name} </h1>

          <p className="description">
          <h1>{this.state.Weather.data.main.temp}°C </h1>
          <img src={`/assets/${this.state.Weather.data.weather[0].icon}.png`} alt='meteo'/>
          <p>Le temps est {this.state.Weather.data.weather[0].description}</p>
          </p>

          <p className="humidity">L'humidité est de {this.state.Weather.data.main.humidity}% </p>

          <p className="vitesse">La vitesse du vent est de {this.state.Weather.data.wind.speed *3} km/h </p>

          </>

        )}
           
      </div>
    );
  }
}

 const mapDispatchToProps = dispatch => {
   return{
       addFavoris: (favoris) => dispatch(addFavoris(favoris))
   }
 };

 const mapStateToProps = state => {
   return {
     listOfFavoris:  state.favoris.listOfFavoris
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Position);
