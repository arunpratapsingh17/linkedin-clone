import React from "react";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Login from "./Login";

import "./App.css";
import Feed from "./Feed.js";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userReducer.js";
const App = () => {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
};

export default App;
