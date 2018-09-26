import React, { Component } from 'react';
import "./Publicacion.css";
import CommentList from './CommentList';
import FormsPublicacion from './FormsPublicacion';

class Publicacion extends Component {
    constructor(props) {
        super(props);
        let localItems = window.localStorage.getItem('items');
        let actualItems = (localItems!==null? JSON.parse(localItems):[])
        this.state = {// Guardar los elementos
           items: actualItems
        }
       // console.log(this.state)
        this.addComment = this.addComment.bind(this);
    }
    
    // recibe el evento
    addComment(event) {
        console.log(event.target.mensaje.value);
        let newComment = event.target.mensaje.value;
        event.preventDefault();
        if (newComment === '') {// caso vacio 
            return;
        }

        var user= JSON.parse(localStorage.getItem("user"));
        let newItem = {
            user: user.displayName,
            text: newComment,
            key: Date.now(),
            like:0
        }

        this.setState((previousState) => {
            let temp =[newItem].concat(previousState.items); 
            window.localStorage.setItem('items',JSON.stringify(temp));
            return {
                items:temp
            }
        });        
        // Referencia al input
        event.target.mensaje.value = '';
        console.log(this.state)       

    }


    render(){
        return(
        <div>
            <FormsPublicacion onAddComent= {this.addComment.bind(this)}/>
            <CommentList items={this.state.items}/>
        </div>
        )
    }


};
export default Publicacion;