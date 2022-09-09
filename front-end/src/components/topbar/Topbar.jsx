import "./topbar.css";
import { Search, Chat } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { useState } from "react";
import axios from "axios";


export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [query, setQuery]=useState("");
  const { user: currentUser } = useContext(AuthContext);

 function  logout(){
    localStorage.clear();
    window.location.href = '/login';
  };
  // console.log(query);
  // console.log(user.filter(user=>user.username.includes("al")));
//  filterContent(user, searchTerm){
//   const result = user.filter((users) => user.username.includes(searchTerm));
//   this.setState({users: result});
//  }
  const handleTextSearch =(e)=>{
    const searchTerm = e.currentTarget.value;
    try{
    axios.get("/users/search?username=" ).then((res)=>{
      if (res.data.success) {
        this.filterContent(res.data.users, searchTerm)
      }
    })
    } catch(err){

    }

  }

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">FANCY WORLD</span>
        </Link>
      </div>
      <Link to="/adminpanel" style={{textDecoration: "none"}}>
        {currentUser.isAdmin=== true &&(
          <span className="adminpanelbutton" >ADMIN PANEL</span>
        )}
        </Link>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for Existing and New Breeds"
            className="searchInput"
            // onChange={e=>{setQuery(e.target.value)}}
            onChange={handleTextSearch}
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
          </div>
          <div className="topbarIconItem">
          <Link to="/messenger" style={{ textDecoration: "none", color: "white"}}> 
          <Chat />
            <span className="topbarIconBadge">*</span>
        </Link>
          </div>
          <div className="topbarIconItem">
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
