import"./hero.css"
import Sections from "../section/Sections";
function HeroImg(){
    return(
        <div id='heroCont'>
            <div id='heroImg'>
            <div id='overlay'>
                <h1 className='imgTitle'>
                    Attend To Best Technical Courses 
                </h1>
                <h2 className='imgTitle2'>
                    Register Now!!
                </h2>
               <a href='#section' > <button className='coursesDiv' >Courses</button></a>
            </div>
            </div>
            <div id='section' style={{margin:'3em'}}>
                </div>
                <div>
                <Sections secName="courses"/></div>
                 </div>
        )
};
export default HeroImg;
