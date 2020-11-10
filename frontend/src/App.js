import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import RegisterPage from "./pages/register";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import Navbar from "./components/NavBar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/register" component={RegisterPage} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
