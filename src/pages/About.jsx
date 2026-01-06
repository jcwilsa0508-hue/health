import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#415b75ff",
        overflow: "hidden",
      }}
    >
      {/* ================= NAVBAR ================= */}
      <nav style={{ ...navStyle, height: "70px" }}>
        <h2 style={{ color: "#fff" }}>KAVI Hospital</h2>
        <div>
          <button style={navBtn} onClick={() => navigate("/")}>Home</button>
          <button style={navBtn} onClick={() => navigate("/about")}>About</button>
          <button style={navBtn} onClick={() => navigate("/contact")}>Contact</button>
          <button style={navBtn} onClick={() => navigate("/login")}>Login</button>
        </div>
      </nav>

      {/* ================= PAGE CONTENT ================= */}
      <div
        style={{
          height: "calc(100vh - 70px)",
          padding: "15px",
          textAlign: "center",
          color: "#e5e5eeff",
          overflow: "hidden",
        }}
      >
        <Header
          title="About Our Hospital"
          subtitle="Providing quality healthcare with compassion"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "15px",
            marginTop: "15px",
          }}
        >
          <Card
            title="🏥 Our Hospital"
            text="We combine modern technology and experienced professionals to provide the best medical services for our patients."
            color="#4f46e5"
          />
          <Card
            title="🎯 Our Mission"
            text="To deliver safe, affordable, and reliable healthcare services with patient-centered care."
            color="#10b981"
          />
          <Card
            title="👁 Our Vision"
            text="To be a trusted healthcare provider recognized for excellence, innovation, and community service."
            color="#f59e0b"
          />
          <Card
            title="👨‍⚕️ Services"
            text="General Medicine, Specialist Consultations, Emergency Care, Diagnostic & Lab Services, Pharmacy Support."
            color="#ef4444"
          />
          <Card
            title="💙 Patient Care"
            text="We provide care with respect, dignity, and personal attention in a safe and comfortable environment."
            color="#6366f1"
          />
        </div>
      </div>
    </div>
  );
}

/* ================== HEADER COMPONENT ================== */
function Header({ title, subtitle }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "6px" }}>{title}</h1>
      <p style={{ fontSize: "15px", opacity: 0.9 }}>{subtitle}</p>
    </div>
  );
}

/* ================== CARD COMPONENT ================== */
function Card({ title, text, color }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #ffffff, #f9fafb)",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        borderTop: `4px solid ${color}`,
      }}
    >
      <h3 style={{ color, marginBottom: "10px" }}>{title}</h3>
      <p style={{ color: "#374151", fontSize: "14px", lineHeight: "1.5" }}>
        {text}
      </p>
    </div>
  );
}

/* ================== NAVBAR STYLES ================== */
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  background: "#1e3a8a",
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
};
