import './nav.css'
import {  Link} from "react-router-dom";
import { Component } from 'react';
class Nav extends Component{
  constructor(props){
    super(props);
   this.state={}
  } 
  logOut=()=>{
    localStorage.setItem("status","")
  }
  show=()=>{
    return "/"
  }
 render(){
    return(
    <div>
        <div id='allNav'>
        <div id='upperNav'><Link to={'/'} style={{textDecoration:'none'}}>
             <img id='navLogo' src="ayam.png" alt='logo'/><pre style={{display:'inline'}}> </pre>
             <p id='logoName'>{this.props.name}</p></Link>
            
             </div>
        <div id='lowerNav'>
            <ul>
          <li style={{'textDecoration':'none'}} > <Link to={'/'}>  Home </Link>
            </li>  
             <li ><Link  to={'/Blog'}>
                Blog 
             </Link ></li>
            <li>
            <Link to={'/ContactForm'}>
            Contact 
            </Link></li>
            <span> <li>
              </li>
           { localStorage.getItem("status")!=="is logged in"?<><Link to='/Login' ><button id='LoginBtn'>Log In</button> </Link><Link to='/Registration' ><button id='signUp'>Sign Up</button> </Link></>:<form action={this.show()}><button id='signUp' onClick={this.logOut}>Log Out</button></form>}
            </span>
            </ul>
        </div>
        </div>
        
        </div>
        )
    }};
export default Nav;
