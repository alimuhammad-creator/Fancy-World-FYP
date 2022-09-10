import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";
import Mainhome from "./pages/mainhome/Mainhome";
import About from "./pages/about/About";
import Breed from "./pages/breed/Breed";
import Adminpanel from "./pages/adminpanel/Adminpanel";
import useTimeout from "./components/useTimeout/useTimeout";

function App() {
  const { user } = useContext(AuthContext);

  function  logout(){
    localStorage.clear();
    window.location.href = '/login';
  };
  //1198995 19 Minutes 58 seconds
  //1200000  20 Minutes
//12000 12 Seconds 14000 14 seconds

  useTimeout(()=> alert("Session Timed Out. Please Login Again"), 1198000);
  setTimeout( function() { logout(); }, 1200000);
 
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route exact path="/breed">
          {user ? <Breed/> : <Login/>}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>
        <Route path="/mainhome">
          {user ? <Redirect to="/" /> : <Mainhome />}
        </Route>
        <Route path="/about">
          {user ? <Redirect to="/" /> : <About />}
        </Route>
        <Route path="/profile/:username">
          {user ? <Profile/> : <Login/>}
        </Route>
        <Route path="/adminpanel">
          {user ? <Adminpanel/> : <Login/>}
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
