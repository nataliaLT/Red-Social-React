import React, { Component } from 'react';

class Like extends Component{
    state = {
        contador : 0
    }
    incrementar=()=>{
        this.setState(prevState =>{
            return{
                contador : ++prevState.contador
            }
        })
    }
    componentDidUpdate(){
        localStorage.setItem('incrementar', JSON.stringify(this.state))
    }
    componentDidMount(){
        const data = localStorage.getItem('incrementar')
        if(data){
            this.setState(prevState => {
                return JSON.parse(data)
            })
        }
    }
    render(){
        return( 
        <div>
            <button onClick={this.incrementar}>+</button>
            <h2>{this.state.contador}</h2>
        </div>
        )
    }
}

export default Like ; 