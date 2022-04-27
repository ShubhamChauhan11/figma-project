import "./Search.css"
const Search=()=>{
     return(
          <div className="search">
               <div className="f">
                    <button className="btn1">Search</button>
               </div>
               <div className="s">
                    <button className="btn">Sort</button>
                    <button className="btn">Filter</button>
                    <button className="btn">ManagePosts</button>
               </div>
          </div>

     )
}
export default Search;