import React, { Component } from 'react';
import'./cards.css'
class Cards extends Component{
    state={
        value:1,
        src1:'https://img.icons8.com/fluency-systems-regular/80/000000/star--v1.png'
    }
    fav=()=>{
        if(this.state.value===1){
                    return(
                    this.setState({value:2,src1:'https://img.icons8.com/material/80/000000/star--v1.png'}))
        }
                    else{
                        return(
                        this.setState({value:1,src1:'https://img.icons8.com/fluency-systems-regular/80/000000/star--v1.png'})
                        )};
                }
    render()
    {
        return(
         <div id='cardId'>
             <img id='cardImg' alt='fav' src={this.props.source} />
             <h2 id='title'> {this.props.title}</h2>
             <div  onClick={this.fav} >
             <img id='fav' alt='fav' src={this.state.src1}/>
             <div className='icon'>{this.props.msg}</div>
             </div>
             <h1 id='price'>{this.props.price}</h1>
             <p id="cardDesc">{this.props.lorem}</p>
             <button id='cardButton'>Register Now!!</button>
         </div>
        )
     }
}
export default Cards;