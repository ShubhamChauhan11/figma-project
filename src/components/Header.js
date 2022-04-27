import React from "react";
import "./Header.css"

const Header=()=>{
     return(
          <div className="mainContainer">
        <div className="headdiv">

        </div>   
        <div className="logo"></div>
        <div className="headercontent">
             <h1>Global Partner Summit</h1>
             <span>Your fist sample to discover the platform</span>
        </div>
        <div className="headerdata">
             <div className="firstdata">
                  <h1>200</h1>
                  <span>Posts</span>
             </div>
             <div className="seconddata">
                  <h1>1500</h1>
                  <span>Members</span>
             </div>


        </div>
     </div>
     )
}

export default Header;