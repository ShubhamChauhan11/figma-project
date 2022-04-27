import "./Views.css";
const Views=()=>{
     return(
          <div className="views">
               <div className="viewtop">
                    <div >
                         <div className="pfimg"></div>
                         
                    </div>
                    <div className="pfinfo">
                         <h2>John Doe</h2>
                         <p>about a minute ago <br/>
                         Global Partner Summit
                         </p>
                    </div>
               </div>
               <div className="lorem">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
               </div>
               <div className="yes">
               <input type="radio" id="html" name="fav_language" value="HTML"/>
               <label for="html">Yes</label>
               </div>
               <div className="no">
               <input type="radio" id="html" name="fav_language" value="HTML"/>
               <label for="html">No</label>

               </div>
               <div className="maybe">
               <input type="radio" id="html" name="fav_language" value="HTML"/>
               <label for="html">Maybe</label>
               </div>
               <div className="likecmnts">
                   <div className="likess">
                        <p>1.1k Likes</p>
                   </div>
                   <div className="cmntss">
                        <p>60 Comments</p>
                   </div>
              

               </div>
               <div className="makechanges">
                    <div className="dolikes">Like</div>
                    <div className="docmnts">Comment</div>
               </div>
          </div>

     )
}
export default Views;