import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UsageBilling from "./components/UsageBilling";
import Nav from "./components/Nav";
import { useState } from "react";
import SideMenu from "./components/SideMenu";
import SideMenuOpen from "./components/SideMenuOpen";
function App() {
  const is_open = true;
  const [isopen, setIsopen] = useState(is_open);
  return (
    <Router>
      <div>
        <SideMenu
          onClick={() => {
            setIsopen(false);
          }}
        />

        <SideMenuOpen
          className={isopen ? "sidemenuopenClose" : "sidemenuopenOpen"}
          onClick={() => {
            setIsopen(true);
          }}
        />

        <Nav
          className={isopen ? "navbar" : "navbarOpen"}
        />

        <Route path="/" />
        <Route path="/user" />
        <Route path="/team" />
        <Route path="/localization" />
        <Route path="/excludelists" />
        <Route path="/usagebilling">
          <UsageBilling
            className={isopen ? "usagebilling" : "usagebillingOpen"}
            id={isopen ? "gridcontainer" : "gridcontainerOpen"}
          />
        </Route>
      </div>
    </Router>
  );
}

export default App;
