import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // your background image

export default function Home() {
  return (
    <div style={container}>
      {/* Background overlay */}
      <div style={overlay}></div>

      {/* Navbar */}
      <nav style={navbar}>
        <Link to="/" style={navLink}>Home</Link>
        <Link to="/about" style={navLink}>About</Link>
        <Link to="/contact" style={navLink}>Contact</Link>
        <Link to="/login" style={loginBtn}>Login</Link>
      </nav>

      {/* Center Hero Content */}
      <div style={content}>
        <h1 style={title}>Welcome to KAVI Hospital</h1>
        <p style={desc}>
          Your health is our priority. Book appointments, consult our doctors, and get healthcare support easily.
        </p>
        <Link to="/book" style={ctaBtn}>Book Appointment</Link>
      </div>
    </div>
  );
}

/* ===== Styles ===== */
const container = {
  height: "100vh",
  width: "100%",
  backgroundImage: `url(${logo})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  fontFamily: "Arial, sans-serif",
  color: "#fff",
  overflow: "hidden",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
  zIndex: 1,
  pointerEvents: "none", // ✅ important: allows clicks on navbar
};

const navbar = {
  position: "absolute",
  top: "20px",
  right: "40px",
  display: "flex",
  gap: "20px",
  zIndex: 10, // above overlay
};

const navLink = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "8px 12px",
  borderRadius: "5px",
  transition: "all 0.3s",
};

const loginBtn = {
  ...navLink,
  background: "linear-gradient(135deg, #6366f1, #9333ea)",
  padding: "8px 16px",
};

const content = {
  position: "relative",
  zIndex: 2,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "20px",
};

const title = {
  fontSize: "50px",
  marginBottom: "20px",
  textShadow: "0 10px 25px rgba(0,0,0,0.5)",
};

const desc = {
  fontSize: "20px",
  maxWidth: "700px",
  lineHeight: "1.7",
  marginBottom: "30px",
};

const ctaBtn = {
  padding: "12px 25px",
  fontSize: "16px",
  fontWeight: "bold",
  background: "linear-gradient(135deg, #6366f1, #9333ea)",
  color: "#fff",
  borderRadius: "12px",
  textDecoration: "none",
  boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  transition: "0.3s",
};
