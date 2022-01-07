import React from "react";

import Piece from './Piece.css'

export default props => {
     const [estado, falseorTrue] = React.useState('false')
     function estate(){
         
         estado == 'false'?falseorTrue('true') :falseorTrue('false')  
         
     }  
  
       
    return(
        <div className="peca"  choise={estado}  onClick={estate}  >
            <img id={props.select} alt={props.den} src={estado =='true'? props.src : props.hidden}  onClick={(e) => props.click(e)} />
           
        </div>
    )   

}

