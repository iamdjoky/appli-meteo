//import batiment from "../assets/img/batiment.png";
import tour from "../assets/img/tour-eiffel.png";
// import londres from "../assets/img/londres.png";
import React,{Component} from "react";
import Favoris from "../views/Favoris";

export default class Ville extends Component {
    constructor(props) {
        super(props);
        this.state = {
          listOfFavoris: [],
        };
      }
render() {
    return( 
        <div className="ville">
            <img src={tour} alt="tour"/>
            <p>{this.props.Favoris}</p>
            {/* <button>Supprimer de mes favoris</button> */}
    
        </div>

        
        );
        }
}

