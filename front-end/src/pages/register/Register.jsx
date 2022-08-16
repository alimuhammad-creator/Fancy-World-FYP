import axios from "axios";
import Maintopbar from "../../components/maintopbar/Maintopbar";
import { useRef } from "react";
import {Link} from "react-router-dom";
import "./register.css";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const city = useRef();
  const from = useRef();
  const relationship =useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords does not match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        city: city.current.value,
        from: from.current.value,
        relationship: relationship.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
    <Maintopbar/>
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <img className="rightbarchicken" src="/assets/chickens/logo.png" alt="" />
          <h3 className="loginLogo">FANCY WORLD</h3> 
          <span className="loginDesc">
            A UNIQUE MARKETPLACE ONLY FOR FANCY FARMING BUSINESS
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <input
             className="loginInput"
            placeholder = "City"
            required
            ref={city}
            />
            <input
            className="loginInput"
            placeholder = "Shop Location"
            ref={from}
            />
            <input
             className="sellertype"
            placeholder ="Seller Type (1=Importer, 2=Exporter, 3=Local Seller, 4=Local Buyer)"
            ref={relationship}
            required
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to="/login">
            <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
