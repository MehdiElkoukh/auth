import React from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
const App: React.FC = () => {
  return (
    <div style={{}}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Profil" component={Profil} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
