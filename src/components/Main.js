import React,{useState} from "react";
import Content from "./Content";
import "./Main.css";
import Content2 from "./Content2";
import Search from "./Search";
import Views from "./Views";
import Result from "./Result";
import PollPopup from "./PollPopup";


const Main=()=>{
     const [popup, setPopup]= useState(false);
     
     return(
          <>
         
          
          <div className="container">
          {popup?prompt(<div className="pollpopup">
               <div>
                    <h1>Poll</h1>
               </div>
               <div>
                    <button>Poll</button>
               </div>

          </div>): ""}
          
         
               
          <div className="maindiv">
               
               <div className="frst">
               <h3>Start a post</h3>
               </div>
               
               <div className="scnd">
                    <div className="options" onClick={()=>{
                         setPopup(true)
                    }}>
                         <div className="pollimg"></div>
                         <h2>Poll</h2>
                    </div>
                    <div className="options">
                         <div className="phimg"></div>
                         
                         <h2>Photo</h2>
                    </div>
                    <div className="options">
                         <div className="vdoimg"></div>
                         
                         <h2>Video</h2>
                    </div>
                    <div className="options">
                         <div className="addimg"></div>
                         
                         <h2>Add File</h2>
                    </div>
               </div>
               
                    
          </div>
          <Search/>
          <Content/>
          <Content2/>
          <Views/>
          <Result/>
          </div>
          </>
         
         
          
              

          

     )
}
export default Main;