import React from "react";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
