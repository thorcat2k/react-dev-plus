import'./Footer.css'
import {BiMap} from 'react-icons/bi'
import{ FiMail, FiPhoneCall} from'react-icons/fi'
import{BsFacebook} from 'react-icons/bs'
function Footer(){
    return(
        <footer>
  <div class="footer">  
    <div class="footer-top">
     <div class="footer-container">
       <div class="footer-row">
         <div class="footer-cover">
           <h4>DEVELOP THE SKILLS TO MOVE FAST AND STAY AHEAD.</h4>
           <ul class="footer-text">
             <li class="text-top--footer">
                Devplus is not a training center, its battle campus for you
                to level up your skillsets and ready to onboard any projects in our 
                “kindest” companies listing 
               </li>
             </ul>
         </div>
          <div class="footer-cover">
           <h4>FOR DEVPLUS</h4>
           <ul class="footer-text">
             <li>
               <a href="https://www.facebook.com/Devplusprogramme " class="footer-link" target="_blank " > Training space </a>
             </li>
             <li>
               <a href="https://www.facebook.com/Devplusprogramme " class="footer-link" target="_blank ">Alumni network</a>
             </li>
             <li>
               <a href="https://conext.asia/" class="footer-link" target="_blank ">Connect with experts </a>
             </li>
           </ul>
         </div>
         <div class="footer-cover">
           <h4>OUR CAMPUS</h4>
           <ul class="footer-text">
             <li>
               <a href='# ' class="footer-link">One plus (+) Programing foundation</a>
             </li>
             <li>
               <a href="# " class="footer-link"> Two plus (++) Skill up and onboard</a>
             </li>
             <li>
               <a href="# " class="footer-link">Three plus (+++) Become a senior</a>
             </li>
           </ul>
         </div>
         <div class="footer-cover cover-top">
           <h4>ADDRESS</h4>
           <ul class="footer-text--right">
             <BiMap class="fa fa-map-marker" aria-hidden="true"></BiMap>
             <li class="text-bottom--footer footer-icon--map">
               368 Đường Trần Hưng Đạo, An Hải, An Hải Tây, Sơn Trà, Đà Nẵng
             </li>
             <FiPhoneCall class="fa fa-phone" aria-hidden="true"></FiPhoneCall>
             <li className="text-bottom--footer footer-icon--number">
               <a href="tel:0368492885" > (+84) 368492885</a>
             </li>
             <FiMail class="fa fa-envelope-o" aria-hidden="true"></FiMail>
             <li class="text-bottom--footer footer-icon--email">
               <a href="mailto:hello@stunited.vn ">hello@stunited.vn</a>
             </li>
           </ul>
         </div> 
       </div>
     </div>
     </div>
     <div class="footer-bottom">
       <div class="footer-bottom--container">
         <div class="footer-bottom--row">
 
           <div class="footer-bottom-cover"> 
             <div class="footer-logo">
               <img src="https://devplus.edu.vn/assets/images/devplus/Artboard_2.png" alt="logo"/>
             </div>
           </div>
           <div class="footer-bottom-cover"> 
             <div class="footer-logo-center">
             </div>
           </div>
 
           <div class="footer-bottom-cover"> 
             <ul class="footer-fb">
               <li class="facebook-footer">
                <a href="https://www.facebook.com/Devplusprogramme " target="_blank ">
                  <BsFacebook class="fa fa-facebook" aria-hidden="true"></BsFacebook>
                  </a>
               </li>
               <li class="facebook-footer">Facebook</li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </div>
    </footer>
    )
}
export default Footer;