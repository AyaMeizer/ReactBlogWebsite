import React, { Component} from "react";

class Posts extends Component{
    post=()=>{
        let postsArr=[]
        postsArr.push(JSON.parse(localStorage.getItem('posts')))
        for(let i=0;i<postsArr.length;i++){
            return postsArr[i].posts
        }

                }
render(){
    return(
        <div>
         <h1> {this.props.hi}</h1>
           <h1>okj</h1>
           {this.post()}
        </div>
    )
}
}
export default Posts;