import { Component } from "react";
import { Link } from "react-router-dom";// header component
 class Registration extends Component{ 
   constructor(props){
     super(props);
   this.state={
     first:"",
     last:"",
     phone:"",
     password:"",
     confPassword:"",
    }
  }
  register=(event,state)=>{
    this.setState({[state]:event.target.value})
  }
  reg=(event)=>{
    // event.preventDefault()
    if(this.state.password===this.state.confPassword){
    let users={FullName:`${this.state.first} ${this.state.last}`,password:this.state.password, phone:this.state.phone }
    let arr=[]
    // arr.push(users)
    console.log(this.users);
    let flag=true
    if(localStorage.length !== 0){
     arr=JSON.parse(localStorage.getItem('users'))
      for(let i=0; i<arr.length ; i++){
        if(arr[i].FullName===`${this.state.first} ${this.state.last}`|| arr[i].phone===this.state.phone){
        alert("username exist")
        return flag= false
        }}
        if(flag===true){
          arr.push(users)
          localStorage.setItem("users",JSON.stringify(arr))
          localStorage.setItem('status','.')
        }
      }
    
    else{
      arr.push(users)
      localStorage.setItem("users",JSON.stringify(arr))
    }}
    else{
      alert("password do not match")
    }
  //   if(localStorage.getItem('Full Name')!== `${this.state.first} ${this.state.last}` 
  //    && localStorage.getItem("Phone Number")!==`${this.state.phone}`){
  //    if(this.state.password===this.state.confPassword){
  //      return(
  //     localStorage.setItem("password",`${this.state.password}`),
  //     // event.preventDefault(),
  //     console.log(this.state),
  //     localStorage.setItem(["Full Name"],`${this.state.first} ${this.state.last}`),
  //     localStorage.setItem(["Phone Number"],`${this.state.phone}`),
  //     alert('Thank You'))
  //   }
  //   else{
  //     event.preventDefault()
  //     alert('Passwords do not match')
  //   }}
  // else {
  //   return(
  //   event.preventDefault(),
  //   alert('already registered'))
  // }
}
   render(){
     return(
  <div id='container'>
           <h1 id='regTitle'> Registration </h1>
    <div id='inputCont'>
    <img className='profileImg' alt='profile' src="https://img.icons8.com/office/100/fa314a/test-account.png"/><br/>
    <form onSubmit={this.reg} action="/Login">
    <input value={this.state.first} onChange={(e)=>this.register(e,'first')} className='inputs' type={'text'} id='firstName' placeholder="  First Name" required></input>
    <input value={this.state.last} onChange={(e)=>this.register(e,'last')} className='inputs' type={'text'} id='lastName' placeholder="  Last Name" required></input>
    <br/>
    <input value={this.state.password} onChange={(e)=>this.register(e,'password')} className='inputs' type={'password'} id='Password' placeholder="  Password" required></input><br/>
    <input value={this.state.confPassword} onChange={(e)=>this.register(e,'confPassword')} className='inputs' type={'password'} id='confPassword' placeholder="  Repeat Password " required></input><br/>
    <input value={this.state.phone} onChange={(e)=>this.register(e,'phone')} className='inputs' type={'number'} id='phoneNumber' placeholder="  Phone Number " required></input><br/>
      <Link to={'/Login'} style={{textDecoration:'none'}}><p id="regMsg"> you already have account? 
    </p></Link>
    
    <Link to={'/Login'}><button className="regSubmit">Log In</button></Link>
    {/* <Link to={'/'}> */}
      <button className="regSubmit">Submit</button>
      {/* </Link> */}
    </form>
    </div>
</div> 
     )}}
     export default Registration;