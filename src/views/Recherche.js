import React,{Component} from "react";
import { connect } from "react-redux";
import { addFavoris } from '../store/reducers/FavorisReducer'

class Recherche extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: null,
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

    render() {
        return (
          <div className="recherche">
              <h1>Rechercher une autre ville</h1>
              
          <input className='input' id="searchbar" onkeyup="" type="text" name="Favoris" value={this.state.Favoris} onChange={this.handleChange} placeholder="Rechercher une ville.."/>
            
          <button className="button_favoris" onClick={()=>this.submitForm()}>Ajouter au favoris</button>
          
          </div>
        )
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

  export default connect(mapStateToProps, mapDispatchToProps)(Recherche);