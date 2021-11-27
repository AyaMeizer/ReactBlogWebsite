import Cards from "../card/Cards"
import React, { Component } from 'react';
import './sections.css'
class Sections extends Component{
    state={
        source:["https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png","https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png","https://jonmircha.com/img/category/javascript.svg","https://thealcott.com.au/wp-content/plugins/types/vendor/toolset/onthego-resources/onthegosystems-icons/vectors/bootstrap-original-logo.svg","https://www.active-netware.fr/wp-content/uploads/2021/08/logo-wordpress-W-300x300-1.png","react_logo-removebg-preview.png"],
        
        title:["HTML intensive course for beginners","CSS intensive course for beginners","Java Script course for beginners","Bootstrap course for beginners","WordPress course for beginners","React intensive course for beginners"],
        
        price:["$20","$30","$40","$10","$10","$50"],
        
        lorem:["Lorem Ipsum is simply dummy text of the printing and typesetting industry."],
        index:0
    }
    // mapping= this.state.source.map((item)=>(
    //    <Cards source={item[]}/>
    // ))
    
        render(){
            return(
                <div className='secCont'>
                    <h1 className='coursesH1'>{this.props.secName}</h1>
                <div id='secName' className='cardsCont'>
    <Cards
        source={this.state.source[0]}
        title={this.state.title[0]} 
        price={this.state.price[0]}
        lorem={this.state.lorem[0]}
        />
    <Cards 
        source={this.state.source[1]}
        title= {this.state.title[1]} 
        price={this.state.price[1]}
        lorem={this.state.lorem[0]}/>
    <Cards 
        source={this.state.source[2]}
        title={this.state.title[2]}
        price={this.state.price[2]}
        lorem={this.state.lorem[0]}/>
    <Cards
        source={this.state.source[3]}
        title={this.state.title[3]} 
        price={this.state.price[3]}
        lorem={this.state.lorem[0]}/> 
    <Cards 
        source={this.state.source[4]}
        title={this.state.title[4]} 
        price={this.state.price[4]}
        lorem={this.state.lorem[0]}/> 
    <Cards 
        source={this.state.source[5]}
        title={this.state.title[5]} 
        price={this.state.price[5]}
        lorem={this.state.lorem[0]}/> 
        </div>
        </div>
    )
}} 
export default Sections ;