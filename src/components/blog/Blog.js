import { Component } from "react";
import './blog.css';
import LogIn from '../Auth/Login'
import Article from '../article/Article'
class Blog extends Component{
      state={
          msg:''
      }
     componentDidMount =() =>{
         if(localStorage.getItem("status")!=="is logged in"){
             this.setState({msg:'please Log in'}) 
      }
    else{
        this.setState({msg:''}) 
    }}
      render(){
        return(
            <div>
          <div className='blogBg' >
              <div className='overLay'></div>
          </div>
          <h1>{this.state.msg}</h1>
          {localStorage.getItem("status")!=="is logged in"? <LogIn/>:<Article/>}
            </div>
        )
    }
}
export default Blog;