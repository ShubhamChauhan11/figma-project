import "./Result.css";
const Result=()=>{
     return(
          <div className="result">
               <div className="resulttop">
                    <div >
                         <div className="rsltimg"></div>
                         
                    </div>
                    <div className="rsltinfo">
                         <h2>John Doe</h2>
                         <p>about a minute ago <br/>
                         Global Partner Summit
                         </p>
                    </div>
               </div>
               <div className="rsltlorem">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
               </div>
               <div className="rsltyes">
               <div className="label" >
                    <div>Yes</div>
                    <div>85%</div>
               </div>
               <progress id="file" value="32" max="100"> 32% </progress>
               </div>
               <div className="rsltno">
               <div className="label" >
                    <div>No</div>
                    <div>85%</div>
               </div>
               <progress id="file" value="85" max="100"> 85% </progress>

               </div>
               <div className="rsltmaybe">
               <div className="label" >
                    <div>Maybe</div>
                    <div>42%</div>
               </div>
               <progress id="file" value="42" max="100"> 42% </progress>
               </div>
               <div className="rsltlikecmnts">
                   <div className="rsltlikess">
                        <p>1.1k Likes</p>
                   </div>
                   <div className="rsltcmntss">
                        <p>60 Comments</p>
                   </div>
              

               </div>
               <div className="rsltmakechanges">
                    <div className="rsltdolikes">Like</div>
                    <div className="rsltdocmnts">Comment</div>
               </div>
          </div>

     )
}
export default Result;