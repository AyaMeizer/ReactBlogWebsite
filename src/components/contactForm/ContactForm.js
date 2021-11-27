import { Component } from "react";
import "./contactForm.css"
class ContactForm extends Component {
state={
   first:'',
   last:'',
   email:'',
   phone:'',
   address:'',
   message:'',
   fullName:"",
}
 data=( event ,state)=>{
   // console.log(this.state)
   return(
      this.setState({[state]:event.target.value}),
      this.setState({fullName:`${this.state.first} ${this.state.last}`}),
      // console.log(this.state.last)
      console.log(this.state.fullName)
      )
   }
   submit=(event)=>{
      if(this.state.fullName===`${localStorage.getItem('Full Name')}` 
      && this.state.phone===`${localStorage.getItem('Phone Number')}`){
      return(
         // event.preventDefault(),
         console.log(this.state),
         localStorage.setItem("Email",`${this.state.email}`),
         localStorage.setItem("Address",`${this.state.address}`),
         localStorage.setItem("Message",`${this.state.message}`),
         alert(`hi ${localStorage.getItem('Full Name')}`),
         console.log(`${localStorage.getItem('Full Name')}`))}
         else{
            return(
           event.preventDefault(),
         alert(`wrong info or you are not registered`)
            )}
      }
   render(){
   return(
      <div >
   <form id='formCont' onSubmit={this.submit}>
      <div className='formInnerCont'>
      <h1 className='formTitle'>Keep In Touch!!</h1>
    <div className='inCon'>
    <input value={this.state.first} onChange={(e)=>this.data(e,'first')} type={'text'} id='firstName_cont' placeholder="  First Name"></input>
    <input value={this.state.last} onChange={(e)=>this.data(e,'last')} type={'text'} id='lastName_cont' placeholder="  Last Name"></input></div>
    <div className='inCon'>
   <input onChange={(e)=>this.data(e,'email')} value={this.state.email} type={'email'} id='Email_cont' placeholder="  Email"></input>
    <input value={this.state.phone} onChange={(e)=>this.data(e,'phone')} type={'number'} id='phoneNumber_cont' placeholder="  Phone Number "></input></div>
    <div className='inCon'>
       <input value={this.state.address} onChange={(e)=>this.data(e,'address')} type={'text'} id='address_cont' placeholder="  Address "></input>
       </div>
    <textarea value={this.state.message} onChange={(e)=>this.data(e,'message')} placeholder='Enter Your Message...' id='txtArea' rows='10'></textarea>
    <button className="submitBtn">Submit</button>
    </div>
    </form> 
</div>
   ) 
}}
export default ContactForm;