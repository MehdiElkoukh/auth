import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../src/assets/images/Logo-header.png";
import { Button } from "antd";
const App: React.FC = () => {
  return (
    <div className="Header">
      <img src={logo} className="img" alt="" />
      <div className="right-side">
        <Link to="/">S'IDENTIFIER</Link>
        <Button type="primary" className="btn" shape="round" size="small">
          S'INSCRIRE
        </Button>
      </div>
    </div>
  );
};

export default App;
