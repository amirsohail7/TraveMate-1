import React from "react";
import Sidebar from "./features/sidebar/Sidebar";
import Topbar from "./features/topbar/Topbar";
import "./Dashboard.css";
import Home from "./pages/home/adminHome";

function Admin() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default Admin;
