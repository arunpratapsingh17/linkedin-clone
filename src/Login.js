import React from "react";
import { auth } from "./firebase";
import "./Login.css";
const Login = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const loginToApp = (e) => {
    e.preventDefault();
  };
  const register = () => {};
  return (
    <div className="login">
      <img
        src="https://golflifenavigators.com/wp-content/uploads/2018/09/linkedin-logo.png"
        alt="Linkedin logo"
      />
      <form>
        <input placeholder="Full Name" type="text" />
        <input placeholder="Profile Pic URL" type="text" />
        <input placeholder="Email" type="text" />
        <input placeholder="Password" type="password" />
        <button type="submit">SIGN IN</button>
      </form>
      <p>
        Not a Member?
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
