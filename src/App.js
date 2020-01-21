import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainComponent from "./Components/MainComponent";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" component={MainComponent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
