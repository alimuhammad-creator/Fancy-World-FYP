import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <span className="sidebarhighlight">SFF Highlights</span>
          <video controls loop autoPlay className="sidebarvideo" src="assets/sidebar.mp4" alt="" />
          
          <Link to={{ pathname: "https://www.youtube.com/c/SultanabadFancyFarming/videos"}} target="_blank" >
          <button className="youtubesidebar">Watch More on YouTube</button>
          </Link>

          <Link to="/breed" style={{ textDecoration: "none" }} >
          <img className="breedlearn" src="/assets/breedlearn.png" alt="" />
          </Link>
          </ul>
      </div>
    </div>
  );
}
