import React from "react";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router";
import Home from "./Home";
import ImageDetail from "./ImageDetail";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/pictures" component={Home} />
        <Route path="/picture/:id" component={ImageDetail} />
        <Redirect from="/" to="/pictures" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
