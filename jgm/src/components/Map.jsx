import React, { Component} from "react";
import axios from "axios";
import Map from './Map.css'
import Piece from "./Piece";

export default class Field extends Component {

      state = {
         temp: [],
          player: 0,
          configs: []
      }
    
      
      change(e){
         let {temp} = this.state
         temp.push([e.target.id, e.target.alt])
        if(temp.length == 2){
           
         this.comparation(temp)
        }
         
      }

      comparation(e){
        let {player} = this.state
       
         if(e[0][0] == e[1][0] && e[0][1] != e[1][1]){
           
       this.setState({player: player +1})

            this.setState({temp: []})
            
         }else{
           this.setState({temp: []})
         }
     }

     componentDidMount(){
      axios.get('http://localhost:8080/cards').then(res => {
          this.setState({configs: res.data})
      })
  }
     
     
   
   render(){
      var {configs, player} = this.state
      const change = ele => this.change(ele)
    
      
    
    
   return   <div className="design">
      <h1>Pontuação: {player}</h1>
       
      
      <div className="field">
        
         {configs.map(element => {
            
            return <Piece select ={element.select}  key={element.id} den={element.id} click={change}  src={element.src} hidden="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-hidden-islam-and-ramadan-flatart-icons-flat-flatarticons.png" />
         } ) }
      </div> 
      
   </div>
   }
}