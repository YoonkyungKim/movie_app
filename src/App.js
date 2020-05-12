import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";
import Navigation from "./components/Navigation";

function App(){
  return <HashRouter>
    {/* You don't need to put everything inside the router, but */}
    {/* We need to use Link inside the Router! */}
    <Navigation />
    {/* If I go to certain path, then show corresponding component.*/}
    {/* Every route in the router get some props by default */}
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={MovieDetail} />
  </HashRouter>;
}

export default App;
