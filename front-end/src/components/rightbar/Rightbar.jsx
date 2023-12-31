import "./rightbar.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id));
  

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const messageClick = () =>{
  try {
    axios.post("/conversations", {senderId : currentUser._id,  receiverId : user._id })
  } catch (err){}
};

//Delete User button onclick
const deleteuser = () =>{  
  try {
    axios.delete("/users/admin/" + user._id, {userId: currentUser._id});
  } catch (err) {}
};

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };
 

  const HomeRightbar = () => {
    return (
      <>

        <span className="sponsored">Sponsored</span>
        <video controls loop autoPlay className="rightbarAd" src="assets/Ad.mp4" alt="" />
  
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}

        <Link to="/messenger" style={{textDecoration: "none"}}>
        {user.username !== currentUser.username &&(
          <button className="messagebutton" onClick={messageClick}>Message</button>
        )}
        </Link>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Shop Location:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Seller Type:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Importer"
                : user.relationship === 2
                ? "Exporter"
                : user.relationship === 3
                ? "Local Buyer"
                : user.relationship === 4
                ? "Local Seller"
                : "_"}
            </span>
          </div>
        </div>
        <Link to="/" style={{textDecoration: "none"}}>
        {currentUser.isAdmin=== true &&(
          <button className="deleteuserbutton" onClick={deleteuser}>Remove this User</button>
        )}
        </Link>
        <h4 className="rightbarTitle">Followings</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
