import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer-distributed" id="about">
     
     <div className="footer-left">
         <h3>SPAM<span>FREE</span></h3>
         <p className="footer-links">
                <a href="/" class="link-1">Home</a>
                <a href="/service">Service</a>
                <a href="#desc">Description</a>
                <a href="/aboutus">AboutUs</a>
                
         </p>
         <p className="footer-company-name">SpamFree © 2002</p>

     </div>

     {/* <div className="footer-center">
         <div>
             <i className="fa fa-map-marker"></i>
             <p>You need to search<span>by yourself</span></p>
         </div>

         <div>
             <i className="fa fa-phone"></i>
             <p>+9999999999</p>
         </div>

         <div>
             <i className="fa fa-envelope"></i>
             <p><a href="#">support@company</a></p>
         </div>
     </div> */}
   
     <div className="footer-right">

         <p className="footer-company-about">
             <span>About Us</span>
             We provide a sevice to check whether the email a user has received is spam or not.
         </p>

         {/* <div className="footer-icons">

             <a href="#"><i class="fa fa-facebook" /></a>
             <a href="#"><i class="fa fa-twitter"></i></a>
             <a href="#"><i class="fa fa-linkedin"></i></a>
             <a href="#"><i class="fa fa-instagram"></i></a>

         </div> */}

     </div>
 </footer>
    </div>
  )
}

export default Footer
