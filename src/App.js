import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import CP from "./components/CP";

import { Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/about'>
        <About />
      </Route>

      <Route exact path='/project'>
        <Project />
      </Route>

      <Route exact path='/cp_profile'>
        <CP />
      </Route>

      <Route exact path='/contact'>
        <Contact />
      </Route>
    </>
  );
}

export default App;
