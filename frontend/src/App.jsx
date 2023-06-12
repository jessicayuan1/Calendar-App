import React from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import Stopwatches from "./pages/stopwatch/stopwatches";
import Calendar from "./pages/calendar/Calendar";
import Profile from "./components/profile.jsx";
import Home from "./components/home.jsx";
import ProtectedHome from "./components/ProtectedHome.jsx";
import Login from "./pages/authentication/login.jsx";
import SignUp from "./pages/authentication/SignUp.jsx";

import "./scss/custom.scss";

/** renders pages based on the url path */
function App() {
  return (
    <React.StrictMode>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/SignUp"} element={<SignUp />} />
          <Route path="/stopwatches" element={<Stopwatches />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ProtectedHome" element={<ProtectedHome />} />
        </Routes>
      </div>
    </React.StrictMode>
  );
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
