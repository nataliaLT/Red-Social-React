import React, {Component} from 'react';
import './PublicacionPerfil.css';
/* import publicacionImg from "../../img/usuaria2.png" */


class PublicacionPerfil extends Component{
  render(){
    return(
      <div className="contenedorPublicacion col-4 offset-4">
        <div className="col-12 text-center">
          <p className="userName">{this.props.author}</p> 
        </div> 
        <div className="">
          <p className="publicacion">{this.props.text}</p>
        </div>
        <div className="">
          <p className="likes">{this.props.likes}</p>
        </div>
      </div>
    )
  }
}

export default PublicacionPerfil;