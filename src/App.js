import React from "react";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import { useDispatch } from "react-redux";
import Login from "./Login";

import "./App.css";
import Feed from "./Feed.js";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userReducer.js";
import { auth } from "./firebase.js";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  React.useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //User is still logged in
      } else {
        //User logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      //To let only verified people login
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
