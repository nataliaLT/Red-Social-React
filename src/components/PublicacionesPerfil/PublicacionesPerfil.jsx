import React, { Component } from "react";
import PublicacionPerfil from "../PublicacionPerfil/PublicacionPerfil";
import "../PublicacionesPerfil/PublicacionesPerfil";

class PublicacionesPerfil extends Component {

  renderMensajes(){
    let mensajes = JSON.parse(localStorage.getItem("items")) || []
    const user = JSON.parse(localStorage.getItem("user")) 
    mensajes = mensajes.filter(mensaje => mensaje.user === user.displayName)
    return mensajes.map((mensaje)=>{
      return <PublicacionPerfil  author={mensaje.user} text={mensaje.text} likes={mensaje.like} />
    })
  }

  render(){
    return(
      <div className="PublicacionesPerfil">
        {this.renderMensajes()}
      </div>
    )
  }
}

export default PublicacionesPerfil