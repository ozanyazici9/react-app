import React from "react";
import { NavLink, Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
