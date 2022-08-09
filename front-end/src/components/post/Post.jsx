import "./post.css";
import React from "react";
import { MoreVert } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useContext, useEffect, useState, useRef} from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { PermMedia, Cancel } from "@material-ui/icons";


export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

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
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

const deleteHandler = () => {
  try {
    axios.delete("/posts/" + post._id, {userId: "6245aebc58a3a42100e43e94"});
    } catch (err){}
};

//temp
// const [file, setFile] = useState(null);
// const desc = useRef();

// const submitHandler = async (e) => {
//   e.preventDefault();
//   const newPost = {
//     userId: user._id,
//     desc: desc.current.value,
//   };
//   if (file) {
//     const data = new FormData();
//     const fileName = Date.now() + file.name;
//     data.append("name", fileName);
//     data.append("file", file);
//     newPost.img = fileName;
//     console.log(newPost);
//     try {
//       await axios.post("/upload", data);
//     } catch (err) {}
//   }
//   try {
//     await axios.post("/posts", newPost);
//     window.location.reload();
//   } catch (err) {}
// };
//temp

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

          {currentUser._id === post.userId && (
          <Menu 
          anchorEl={anchorEl} 
          keepMounted onClose={handleClose} 
          open={open}>
            <MenuItem
            onClick={handleClose}
            >
              <button className="posteditbutton" >Edit &nbsp;</button>

              <button className="postdeletebutton" onClick={deleteHandler} >Delete</button>
            </MenuItem>
         </Menu>
         )}

         {/* temp */}


         {/* <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Add Photo</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"                        
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form> */}

         {/* temp */}
  
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
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
          {/* <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
