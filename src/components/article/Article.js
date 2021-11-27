import React,{ Component } from "react";
import Posts from "../posts/Posts";
// import { ReactDOM } from "react-dom";
class Article extends Component{
    constructor(props){
        super(props)
    // let Arr=[]
    this.state={
        values:'',
        post:"",
    }
    this.Arr=[]
}
getValue=(e,input)=>{
    this.setState({[input]:e.target.value})
}
    f=()=>{
        this.setState({post:this.state.values})
    }
    componentDidMount=()=>{
    localStorage.setItem("posts",[{"posts": "aya"}])}
    post=()=>{
                let publish={posts:this.state.post}
                       let flag=true;
                        let postsArr=[]
                        // postsArr.push(publish)
                        if(localStorage.getItem('posts') !== null){
                            postsArr=JSON.parse(localStorage.getItem('posts'))
                            for(let i=0; i<postsArr.length ; i++){
                                if(postsArr[i].posts===`${this.state.post}`){
                                    alert("published")
                                    return flag= false
                                }
                            }
                            if(flag===true && this.state.post!==""){
                                postsArr.push(publish)
                                localStorage.setItem("posts",JSON.stringify(postsArr))
                            }
                            else{alert("write something")}
                        }
                    else{ localStorage.setItem("posts",JSON.stringify(postsArr))  }}
            
            
render(){
        return(
            <div id='hContainer'>
                <textarea value={this.state.values} onKeyUp={this.f} onChange={(e)=>this.getValue(e,"values")} cols="100" rows="10"></textarea>
                <input onClick={this.post}  type='submit' value="post"/>
                <Posts></Posts>
            </div>
        )
    }
}
export default Article;
