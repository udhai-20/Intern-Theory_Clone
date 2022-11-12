import React from "react";

import './step2.css'

const Step2 = () => {
  return ( <div className="register_step_2" id="register_step_2">
  <div className="step_2_main">
    <p className="heading">Education</p>
    <p className="para">Add your educational qualification</p>

    <div className="step_2_form">
      <form autocomplete="off" id="step_2_form">
        <div>
          <label for="education" style={{color:"red",fontWeight:"bold"}}>Level of Education *</label>
          <input
            type="text"
            name="education"
            id="education"
            placeholder="Education * i.e. Graduation"
          />
        </div>
        <div>
          <label for="institute"  style={{color:"red",fontWeight:"bold"}}>Institute Name *</label>
          <input
            type="text"
            name="institute"
            id="institute"
            placeholder="Enter 2 or more chars i.e. IIT"
            
          />
        </div>
        <div>
          <label for="degree"  style={{color:"red",fontWeight:"bold"}} >Degree *</label>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="Enter 2 or more chars i.e.BE  "
        
          />
        </div>
        <div>
          <label for="year"  style={{color:"red",fontWeight:"bold"}}>Select Year *</label>
          <input
            type="text"
            name="year"
            id="year"
            placeholder="college year i.e. First Year"
            
          />
        </div>
        <div>
           <button className="step_2_btn" style={{backgroundColor:"red",color:"white",padding:"10px 20px",border:"none"}}>
            ADD
          </button>
         
        </div>
      </form>
    </div>
  </div>
</div>
);
};

export default Step2;
