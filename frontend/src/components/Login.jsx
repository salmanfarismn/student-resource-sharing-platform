import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h1 style={styles.logo}>📚 Gradient</h1>
        <p style={styles.subtitle}>Access your study resources</p>

        <form style={styles.form}>

          <div style={styles.inputGroup}>
            <FaUser style={styles.icon} />
            <input
              type="text"
              placeholder="Username or Email"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <FaLock style={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
            />
          </div>

          <div style={styles.options}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" style={styles.forgot}>Forgot password?</a>
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>

        </form>

        <p style={styles.register}>
          Don't have an account? <a href="#">Register</a>
        </p>

      </div>
    </div>
  );
}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#4facfe,#00f2fe)",
    fontFamily: "Arial"
  },

  card: {
    width: "380px",
    background: "#fff",
    padding: "40px",
    borderRadius: "14px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
    textAlign: "center"
  },

  logo: {
    color: "#4facfe",
    marginBottom: "5px"
  },

  subtitle: {
    color: "#777",
    marginBottom: "25px",
    fontSize: "14px"
  },

  form: {
    width: "100%"
  },

  inputGroup: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "15px"
  },

  icon: {
    marginRight: "10px",
    color: "#4facfe"
  },

  input: {
    border: "none",
    outline: "none",
    flex: 1,
    fontSize: "14px"
  },

  options: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    marginBottom: "20px"
  },

  forgot: {
    textDecoration: "none",
    color: "#4facfe"
  },

  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg,#4facfe,#00c6ff)",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s"
  },

  register: {
    marginTop: "20px",
    fontSize: "14px"
  }
};

export default Login;