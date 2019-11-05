import React from "react";
import "./App.css";
import UserDashboard from "./components/UserDashboard";
import Login from "./components/Login";

function isAuthenticated() {
  const jwt = localStorage.getItem("jwtToken");
  if (jwt) {
    return true;
  }
  return false;
}

function App() {
  if (isAuthenticated()) {
    return <UserDashboard />;
  }
  return <Login />;
}

export default App;
