import "./adminpanel.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Adminpanel() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [allusers, setAllusers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userList = await axios.get("/users/test?username");
        setAllusers(userList.data);
      } catch (err) {
        console.log(err);
      }
    };getUsers(); }, 
    []);

  return (
    <>
      <Topbar />
      <div className="profile">
      <Sidebar/>
      <div className="profileRight">
      <div className="profileRightBottom">
        {/* <h4 className="MainTitle">All Users</h4> */}
        <div className="alluserlist">
        <h4 className="MainTitle">All Users</h4>
        {allusers.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="alluserimg"
                />
                <table className="allusername">{friend.username}</table>
            </Link>
          ))}
          </div>
          <div className="rightbaradmin">  <Rightbar/></div>
        {/* <Rightbar/> */}
      </div>
      </div>
      </div>    
    </>
  );
}
