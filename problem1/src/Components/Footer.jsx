import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      style={{
        background: theme.background,
        color: theme.text,
        display: "flex",
        justifyContent:"center",
        fontSize:"20px"
      }}
    >
      <p>@2024 Made by Imran Khan</p>
    </footer>
  );
};

export default Footer;
