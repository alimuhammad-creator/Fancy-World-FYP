import "./maintopbar.css";
import { Link } from "react-router-dom";

export default function MainTopbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">FANCY WORLD</span>
        </Link>
      </div>
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
