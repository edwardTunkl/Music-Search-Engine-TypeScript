import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBarComponent from "./Components/NavBarComponent";
import SearchComponent from "./Components/SearchComponent";


function App() {
  return (
    <div id="back" className="">
      <BrowserRouter>
        <NavBarComponent />
        <Route exact path="/" component={SearchComponent} />
      </BrowserRouter>
    </div>
  );
}

export default App;
