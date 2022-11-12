import React from "react";
import "./register.css"

function SigningPage() {
  return (
    <div class="register" id="register">
      <div class="register_main">
        <p class="heading">Register Candidate</p>
        <p class="para">Already have an account? <a href="#">Sign in</a></p>
        <div class="background_red">
          <p>
            If you are a company looking to hire interns, please register as a
            company by clicking <a href="#">here.</a>
          </p>
        </div>
        <div class="login_with" style={{backgroundColor: "rgb(67, 102, 178)"}}>
          <div>
            <img
              src="https://www.interntheory.com/assets/iconsLogos/facebook-circular-logo.svg"
              alt="Facebook"
            />
          </div>
          <div>SIGIN WITH FACEBOOK</div>
        </div>
        <div class="login_with" style={{backgroundColor: "rgb(8, 125, 220)"}}>
          <div>
            <img
              src="https://www.interntheory.com/assets/iconsLogos/googlelogo.svg"
              alt="Logo of Google"
            />
          </div>
          <div>SIGIN WITH GOOGLE</div>
        </div>
        <div class="text_center">OR</div>
       <div>
        <form id="register_form" autoComplete="off">
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name*"
              
            />
          <input type="text" name="lname" id="lname" placeholder="Last Name*"/>
          <input type="email" name="email" id="email" placeholder="Email*" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password*"
          
          />
          <div id="hidden">
          <input
            type="number"
            name="mobile"
            id="mobile"
            placeholder="Mobile Number*"
            
          />
         <div>
          <input type="text" name="city" id="city" placeholder="Select City*"  required/>

         </div>
          
         <div>
          <input
            type="text"
            name="preference"
            id="preference"
            placeholder="Preference*"
          
          />
         </div>
         <div>
            <input
            type="text"
            name="find"
            id="find"
            placeholder="How did you find us?*"
          
          />
         </div>
         <div>
          <input
            type="text"
            name="looking"
            id="looking"
            placeholder="What are you looking for?*"
            
          />

         </div>
         
          <input
            type="text"
            name="affilation"
            id="affilation"
            placeholder="Affiliate Code (if any)*"
          
          />

          </div>
          <button id="next_btn"  >NEXT</button>
          </form>
          </div>
        
        </div>
      </div>
    
      );
}

export default SigningPage;
