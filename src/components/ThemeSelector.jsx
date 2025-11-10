import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);
  const inverted = theme === "light" ? "dark" : "light";

  return (
    <div
      className= "theme-selector pointer  ms-4"
      onClick={() => setTheme(inverted)}
      type="button"
    >
      <i
        className={`bi bi-moon-stars${
          theme === "dark" ? " text-white " : "-fill"
        }`}
      ></i>
    </div>
  );
}
