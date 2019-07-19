import React from "react";
import "./Login.css";
import LoginForm from "../component/LoginForm";
import { RouteComponentProps } from "react-router-dom";

const login: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  return (
    <div className="login">
      <LoginForm {...props} />
    </div>
  );
};

export default login;
