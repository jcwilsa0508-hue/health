import { useState } from "react";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ minHeight: "100vh", background: "#e0e7ff" }}>
      {/* ================= NAVBAR ================= */}
      <nav style={navStyle}>
        <h2 style={{ color: "#fff" }}>KAVI Hospital</h2>
        <div>
          <button style={navBtn} onClick={() => navigate("/")}>Home</button>
          <button style={navBtn} onClick={() => navigate("/about")}>About</button>
          <button style={navBtn} onClick={() => navigate("/login")}>Login</button>
        </div>
      </nav>

      {/* ================= PAGE CONTENT ================= */}
      <div style={pageStyle}>
        {/* CENTER TITLE */}
        <div style={titleWrapper}>
          <Header
            title="Contact Us"
            subtitle="We are here to help you"
          />
        </div>

        <div style={container}>
          {/* Left - Contact Info */}
          <div style={infoBox}>
            <h2 style={heading}>🏥 KAVI Hospital</h2>
            <p><b>📍 Address:</b><br />Chennai, Tamil Nadu, India</p>
            <p><b>📞 Phone:</b><br />+91 98765 43210</p>
            <p><b>📧 Email:</b><br />contact@kavihospital.com</p>
            <p><b>⏰ Working Hours:</b><br />Mon - Sat (9 AM - 8 PM)</p>
          </div>

          {/* Right - Contact Form */}
          <div style={formBox}>
            <h2 style={heading}>Send Us a Message</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                style={input}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                style={input}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                style={textarea}
              />

              <button type="submit" style={button}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div style={mapBox}>
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps?q=chennai&output=embed"
            style={map}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#1e3a8a",
  padding: "15px 40px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
};

const navBtn = {
  marginLeft: "15px",
  padding: "8px 16px",
  background: "#4f46e5",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s",
};

const pageStyle = {
  padding: "40px",
  minHeight: "100vh",
};

const titleWrapper = {
  textAlign: "center",
  marginBottom: "20px",
};

const container = {
  display: "flex",
  gap: "30px",
  marginTop: "30px",
  flexWrap: "wrap",
};

const infoBox = {
  flex: 1,
  minWidth: "280px",
  background: "linear-gradient(135deg, #4f46e5, #6366f1)",
  color: "#fff",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
};

const formBox = {
  flex: 1,
  minWidth: "280px",
  background: "#fff",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
};

const heading = {
  marginBottom: "20px",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "15px",
};

const textarea = {
  ...input,
  resize: "none",
};

const button = {
  width: "100%",
  padding: "12px",
  background: "#4f46e5",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};

const mapBox = {
  marginTop: "40px",
  borderRadius: "14px",
  overflow: "hidden",
  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
};

const map = {
  width: "100%",
  height: "300px",
  border: "0",
};
