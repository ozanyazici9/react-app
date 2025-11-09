import { NavLink, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const MainLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const color = theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";

  return (
    <>
      <Navbar />
      <main className={color}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
