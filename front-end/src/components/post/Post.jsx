import "./post.css";
import React from "react";
import { MoreVert } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  const [editable, setEditable] = useState(false);

  const [name, setName] = useState("");
  const [editPostId, setEditPostId] = useState(null)

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) { }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const deleteHandler = () => {
    try {
      axios.delete("/posts/" + post._id);
      window.location.reload();
    } catch (err) { }
  };

  const handleEdit = (post) => {
    setEditable(true)
    setName(post.desc)
    setEditPostId(post._id)
  }

  const handleEditPost = async (e) => {
    e.stopPropagation();
   try {
      await axios.put("/posts/" + editPostId, { ...post, desc: name });
      setEditable(false)
      setName("")
      setEditPostId(null)
    } catch (err) { }


  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>

          <IconButton
            aria-label="more"
            onClick={handleClick}
            aria-haspopup="true"
            aria-controls="long-menu"
          >
            <MoreVert />
          </IconButton>

          {currentUser.isAdmin === true && (
            <Menu
            anchorEl={anchorEl}
            keepMounted onClose={handleClose}
            open={open}>
            <MenuItem
              onClick={handleClose}
            >
              <div >
              <button onClick={deleteHandler} >Delete</button>
              </div>
              
            </MenuItem>
          </Menu>
          )}

          {currentUser._id === post.userId && (
            <Menu
              anchorEl={anchorEl}
              keepMounted onClose={handleClose}
              open={open}>
              <MenuItem
                onClick={handleClose}
              >
                <div className="divedit">
                <button className="posteditbutton" onClick={() => handleEdit(post)} >Edit &nbsp;</button>
                </div>
                <div >
                <button className="postdeletebutton" onClick={deleteHandler} >Delete</button>
                </div>
                
              </MenuItem>
            </Menu>
          )}

        </div>
        <div className="postCenter">

          {editable ? (
            <form className="editform" onSubmit={handleEditPost}>
              <input className="editinput"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => {
                  setEditable(false);
                  setName("");
                }}
                type="text"
                onClick={(event) => event.stopPropagation()}
              />
            </form>
          ) : (
            <div
              className="postText"
              style={{ cursor: "text" }}
              onClick={(event) => {
                setEditable(true);
                event.stopPropagation();
              }}
            >
              {post.desc}
            </div>
          )}


          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people Appreciate it</span>
          </div>
        </div>
      </div>
    </div>
  );
}
