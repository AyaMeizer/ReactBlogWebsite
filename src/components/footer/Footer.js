import './footer.css'
const Footer = (props) =>{
    return(
       <div id='footerCont'>
           <ul id='socialIcons'>
             <li><a target="_blank" rel="noreferrer" href='https://ar-ar.facebook.com/'> 
             <img alt="footer icons" src="https://img.icons8.com/nolan/64/facebook-circled.png"/>
            </a></li>  
             <li><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/aya-meizer/'>  
             <img alt="footer icons" src="https://img.icons8.com/nolan/64/linkedin-circled.png"/>
            </a></li> 
            <img alt='logo' style={{width:'70px',height:'50px',verticalAlign:'bottom'}} src='ayam.png'/>
             <li><a target="_blank" rel="noreferrer" href='https://twitter.com/twitter?lang=ar'> 
             <img alt="footer icons" src="https://img.icons8.com/nolan/64/twitter-circled.png"/>
            </a></li>  
             <li><a target="_blank" rel="noreferrer" href='https://github.com/AyaMeizer'> 
             <img alt="footer icons" src="https://img.icons8.com/nolan/64/github.png"/> 
            </a></li> 
           </ul>
           <h2 id='copyRights'>&copy; copy rights</h2>
       </div>
    )
};
export default Footer;