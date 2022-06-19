import "./maintopbar.css";
//import { Search, Person, Chat, Notifications } from "@material-ui/icons";
//import { Search, Chat } from "@material-ui/icons";
import { Link } from "react-router-dom";
//import { useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  //const { user } = useContext(AuthContext);
  //const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">FANCY WORLD</span>
        </Link>
      </div>
      {/* <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for Existing and New Breeds"
            className="searchInput"
          />
        </div>
      </div> */}
     
        <div className="topbarLinks">

        <Link to="/mainhome" style={{ textDecoration: "none"}}>
       <span className="topbarLink">Home</span>
       </Link>

       <Link to="/about" style={{ textDecoration: "none" }}>
        <span className="topbarLink">About</span>
        </Link>


        <Link to="/login" style={{ textDecoration: "none" }}>
        <span className="topbarLink">Login</span>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }}>
        <span className="topbarLink">Register</span>
        </Link>
        
        
        
        </div>
     
    </div>
  );
}
