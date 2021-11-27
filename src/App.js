import Nav from "./components/nav/Nav"
import Registration from './components/register/Registration'
import Login  from './components/Auth/Login'
import Footer from "./components/footer/Footer"
import HeroImg from "./components/heroImg/HeroImg"
import Blog from "./components/blog/Blog"
import ContactForm from "./components/contactForm/ContactForm"
import Article from "./components/article/Article"
// import React, { Component } from 'react';
import {
    Routes,
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
 function App(){
    
return (
    <div className="appCont">
    <Router>
    <div>
    <Nav text="Header" name="React" color="grey"/>
     {/* <br/> */}
      <Routes>
     <Route path="/" exact element={<div><HeroImg/></div>}></Route>
     <Route path="/contactForm" exact element={<div><ContactForm/></div>}></Route>
     <Route path="/Registration" exact element={<Registration/>}></Route>
     <Route path="/Login" exact element={<Login/>}></Route>
     <Route path="/Blog" exact element={<Blog/>}></Route>
     <Route path="/Article" exact element={<Article/>}></Route>
     </Routes>
     
     {/* <br/> */}
     {/* <Content text="Content" name="Content Section" sub="This is subject"/>
      <Content text="Hello OCA" name="Greeting section" sub="Welcome All!!"/>
      <br/>
      <Footer text="Footer" name="Footer Section" style="green"/>
    <Footer text="Contact us and let us know how do you feel" name="Footer Section" style="blue"/>  */}
</div>
{/* <Sections secName="Courses" /> */}
<Footer />
</Router >
</div>
)
};
 export default App;
 //kill port command on git bash 
 //npx kill-port 3000 8080 4200