import Sidebartop from "./Sidebartop";
import "./Sidebar.css";
import Members from "./Members";

const Sidebar=()=>{
     return(
          <div className="sidebar">
              <Sidebartop/>
              <Members/>
               

          </div>
     )
}
export default Sidebar;