import "./topbar.css";
//import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Search, Chat } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";



export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

 function  logout(){
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">FANCY WORLD</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for Existing and New Breeds"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          
        {/* <Link to="/about" style={{ textDecoration: "none" }}>
        <span className="topbarLink">About</span>
        </Link>
        
       <Link to="/mainhome" style={{ textDecoration: "none"}}>
       <span className="topbarLink">Home</span>
       </Link> */}

        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            {/* <Person />
            <span className="topbarIconBadge">1</span> */}
          </div>
          <div className="topbarIconItem">
          <Link to="/messenger" style={{ textDecoration: "none", color: "white"}}> 
          <Chat />
            <span className="topbarIconBadge">*</span>
        </Link>

            {/* <Chat />
            <span className="topbarIconBadge">3</span> */}
          </div>
          <div className="topbarIconItem">
            {/* <Notifications />
            <span className="topbarIconBadge">1</span> */}
          </div>
        </div>

       
          <Link to={`/profile/${user.username}`} style={{textDecoration: "none"}}> 
          <span className="topbarprofilename">{user.username}</span> 
          </Link>
          
      
        
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
        <button className="logoutbutton" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
