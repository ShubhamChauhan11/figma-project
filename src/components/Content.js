import "./Content.css"

const Content=()=>{
     return(
          <div className="contentdiv">
               <div className="content1">
                    <div className="pimg">
                         <div className="pimg"></div>
                         
                    </div>
                    <div className="pinfo">
                         <h2>John Doe</h2>
                         <p>about a minute ago <br/>
                         Global Partner Summit
                         </p>
                    </div>
               </div>
               <div className="postimg">
                    
               </div>
               <div className="likecmnt">
                   <div className="likes">
                        <p>1.1k Likes</p>
                   </div>
                   <div className="cmnts">
                        <p>60 Comments</p>
                   </div>
              

               </div>
               <div className="makechange">
                    <div className="dolike">Like</div>
                    <div className="docmnt">Comment</div>
               </div>
          </div>

     )
}
export default Content;