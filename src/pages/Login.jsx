// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo.jpg";


// export default function Login() {
//   const [role, setRole] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     localStorage.setItem("role", role);

//     if (role === "patient") navigate("/patient");
//     else if (role === "doctor") navigate("/doctor");
//     else if (role === "admin") navigate("/admin");
//     else alert("Please select role");
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">

//         {/* ✅ Logo */}
//         <img
//           src={logo}
//           alt="Healthcare Logo"
//           className="login-logo"
//         />

//         <h2>User Login</h2>

//         <input placeholder="Email" />
//         <input type="password" placeholder="Password" />

//         <select onChange={(e) => setRole(e.target.value)}>
//           <option value="">Select Role</option>
//           <option value="patient">Patient</option>
//           <option value="doctor">Doctor</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button onClick={handleLogin}>Login</button>

//         <p
//           onClick={() => navigate("/register")}
//           style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
//         >
//           New User? Register
//         </p>
//       </div>
//     </div>
//   );
// }  

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    localStorage.setItem("role", role);
    navigate(`/${role}`);
  };

  return (
    <div style={pageStyle}>
      {/* Overlay */}
      <div style={overlayStyle}></div>

      {/* Navbar */}
      <nav style={navStyle}>
        <span style={logoStyle}>KAVI Hospital</span>
        <div style={navLinks}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/about" style={linkStyle}>About</a>
          <a href="/contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      {/* Login Card */}
      <div style={cardStyle}>
        <h1 style={{ color: "#4f46e5", marginBottom: "10px" }}>
          Welcome
        </h1>
        <p style={{ color: "#6b7280", marginBottom: "30px" }}>
          Select your role to continue
        </p>

        <button
          style={{ ...btnStyle, background: "#4f46e5" }}
          onClick={() => handleLogin("patient")}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          👤 Patient Login
        </button>

        <button
          style={{ ...btnStyle, background: "#10b981" }}
          onClick={() => handleLogin("doctor")}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          🩺 Doctor Login
        </button>

        <button
          style={{ ...btnStyle, background: "#f59e0b" }}
          onClick={() => handleLogin("admin")}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          🛠 Admin Login
        </button>
      </div>
    </div>
  );
}

/* ===== Hover functions ===== */
const hoverIn = (e) => {
  e.currentTarget.style.transform = "translateY(-6px)";
  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.3)";
};

const hoverOut = (e) => {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "none";
};

/* ===== Styles ===== */

const pageStyle = {
  height: "100vh",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1950&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Arial, sans-serif",
};

const overlayStyle = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
};

/* Navbar */
const navStyle = {
  position: "absolute",
  top: "20px",
  right: "40px",
  left: "40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 2,
};

const logoStyle = {
  color: "#fff",
  fontSize: "22px",
  fontWeight: "bold",
};

const navLinks = {
  display: "flex",
  gap: "20px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "8px 14px",
  borderRadius: "6px",
  transition: "0.3s",
};

/* Card */
const cardStyle = {
  position: "relative",
  zIndex: 2,
  background: "#ffffff",
  padding: "40px",
  borderRadius: "18px",
  width: "380px",
  textAlign: "center",
  boxShadow: "0 25px 45px rgba(0,0,0,0.35)",
};

/* Buttons */
const btnStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  border: "none",
  borderRadius: "10px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
};



