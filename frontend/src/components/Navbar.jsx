import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>
        <Link to="/" style={styles.logoLink}>📚 Gradient</Link>
      </h2>

      <div>
        <Link to="/" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Signup</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#4facfe",
    color: "#fff"
  },

  logo: {
    margin: 0
  },

  logoLink: {
    color: "white",
    textDecoration: "none"
  },

  link: {
    marginLeft: "20px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default Navbar;