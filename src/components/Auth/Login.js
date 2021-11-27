import { Component } from "react";
// import { Link } from "react-router-dom";
class Login extends Component{
  constructor(props){
    super(props)
  this.state={
    fullName:"",
    password:"",
    AdminName:'aya meizer',
    AdminPhone:'1',
    AdminPassword:'1',
  }}
  receive=(event,state)=>{
    this.setState({[state]:event.target.value})
    console.log(this.state.fullName);
  }
  // componentDidMount=()=>{

  //   localStorage.setItem('users',[{"FullName":"a" ,"password":"a","phone":"1"}])
  // }
  show=()=>{
    let arr=[{FullName:"",password:"",phone:""}]
    arr.push(JSON.parse(localStorage.getItem('users')))
    for(let i=0;i<arr.length;i++){
      if((this.state.fullName===arr[i].FullName  && this.state.password===arr[i].password)
      ||(this.state.fullName===arr[i].phone && this.state.password===arr[i].password)){
        if(localStorage.getItem("status")==="is logged in"){
          return "/Blog"}
           else{
          return "/Blog"}}
          else{
            return('/Blog')}
        }
}
  loginBtn=(event)=>{
    let arr=[1]
  let flag=true
  arr=JSON.parse(localStorage.getItem('users'))
  for(let i=0;i<arr.length;i++){
    if((this.state.fullName===arr[i].FullName  && this.state.password===arr[i].password)
    ||(this.state.fullName===arr[i].phone && this.state.password===arr[i].password)){
      if(localStorage.getItem("status")==="is logged in"){
        return (alert ("you already logged in"))}
                 alert('thats right')
        localStorage.setItem("status", "is logged in")
      return flag=false
    }}
  if(flag===true) {
    return(
    event.preventDefault(),
    alert('wrong username or password'),
    localStorage.setItem("status","."))
  }
}
  render(){ 
    return(
      <form onSubmit={this.loginBtn} action={this.show()}>
 <div id='container'>
     <h1 id='regTitle'> Log In </h1>
   <div id='inputCont'>
   <img className='profileImg' alt='profile' src="https://img.icons8.com/office/100/fa314a/test-account.png"/><br/>
   <input value={this.state.fullName} onChange={(e)=>this.receive(e,'fullName')} type={'text'} className='inputs' placeholder="  Username or Phone number" required></input>
   <br/>
   <input value={this.state.password} onChange={(e)=>this.receive(e,'password')} className='inputs' type={'password'} id='Password' placeholder="  Password" required></input><br/>
   <p id='forgetPass'>Forget your password?</p>
   {/* <Link to={'/'} > */}
     <button className="regSubmit" onClick={this.clicked}>Submit</button>
     {/* </Link> */}
   </div>
   </div></form>
    )}}
    export default Login