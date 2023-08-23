import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { useState } from "react";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import axios from "axios";
function Navbar() {
     const [active, setActive] = useState(false)
     const [results, setResults] = useState([])
     const titleLength = 15
     const handleSearch = async (query) => {
     try{
      const getSearch = await axios.get(`https://api.consumet.org/anime/gogoanime/${query}`)
      setResults(getSearch.data.results)
      console.log(getSearch.data.results);
     }
     catch(err){
      console.log(err);
     }
     }
    return ( 
        <nav className="NavbarContainer">
        <img src={logo} alt={logo}/>
        <section>
        <div className="SearchContainer">
          <input type="search" placeholder="Search..." onChange={(e) => handleSearch(e.target.value)}/>
          <div className="ResultContainer">
           {results && results.map(results => (
             <Link to={`/info/${results.id}/null`}>
             <figure>
             <img src={results.image} alt={results.id}/>
             <figcaption>
               <h3>{results.title.length > titleLength ? `${results.title.slice(0, titleLength)}...` : results.title}</h3>
               <span>{results.releaseDate}</span>
               <small>Type: {results.subOrDub}</small>
             </figcaption>
             </figure>
             </Link>
           ))}
          </div>
        </div>
        <ul className={active ? "active" : null}>
          <header>
            <CloseSharpIcon onClick={() => setActive(false)}/>
          </header>
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/about`}>About</Link></li>
            <li><Link to={`/`}>Playground</Link></li>
            <li><Link to={"https://ko-fi.com/cedricmanuel"}>Buy me Coffe</Link></li>
        </ul>
        </section>
        <MenuSharpIcon id="menu" onClick={() => setActive(true)}/>
        </nav>
     );
}

export default Navbar;