import React,{Component} from "react";
import Ville from '../components/Villes';
import axios from "axios";

import favorisRepository from "../repository/favorisRepository";

import { connect } from "react-redux";

class Favoris extends Component {
    constructor(props) {
      super(props);
      this.state = {
        listOfFavoris: [],
        listOfWeatherFavoris: null
      };
    }

    async componentDidMount(){
    this.setState({ listOfFavoris: this.props.listOfFavoris });
     const listOfWeatherFavoris = await Promise.all(await this.props.listOfFavoris.map(async (obj) => {
       return {
         name : obj.Favoris,
         weather: await favorisRepository.getAllFavoris(obj.Favoris)
       }
     }))
    this.setState({listOfWeatherFavoris: listOfWeatherFavoris});
   
     };
    render() {
        return (
          <div className="favoris">
                <h4>Vos villes ajoutées en favoris</h4>
              {this.state.listOfFavoris.map((ville) => {
               
              return <Ville key={ville.Favoris} Favoris={ville.Favoris}/>;
            })}

              {this.state.listOfWeatherFavoris ? this.state.listOfWeatherFavoris.map((item) => {
                  return <div className="temperature_ville">
                    <p>{item.weather.main.temp}°C</p>
                    <img src={`./assets/${item.weather.weather[0].icon}.png`} alt='meteo'/> 
                    </div>
              }) : null }
          </div>


        )
    }
}
const mapStateToProps = state => {
    return {
      listOfFavoris:  state.favoris.listOfFavoris
    }
  }

  export default connect(mapStateToProps)(Favoris)