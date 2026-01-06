import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar";

export default function DoctorDashboard() {
  const navigate = useNavigate();

  const [appointments] = useState(
    () => JSON.parse(localStorage.getItem("appointments")) || []
  );

  return (
    <div style={layout}>
      <Sidebar role="doctor" />

      <div style={content}>
        <h2 style={header}>Doctor Dashboard</h2>
        <p style={subHeader}>Welcome Doctor 👨‍⚕️</p>

        <h3 style={subHeader}>Patient Appointments</h3>

        {appointments.length === 0 ? (
          <p style={noAppointments}>No appointments available</p>
        ) : (
          appointments.map((a, index) => (
            <div
              style={card}
              key={index}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <p><strong>Token:</strong> {a.token}</p>
              <p><strong>Patient:</strong> Patient {index + 1}</p>
              <p><strong>Doctor:</strong> {a.doctor}</p>
              <p><strong>Date:</strong> {a.date}</p>
              <p><strong>Time:</strong> {a.time}</p>
              <p><strong>Symptoms:</strong> {a.symptoms}</p>

              {/* 🔥 TOKEN PASS HERE */}
              <button
                style={primaryBtn}
                onClick={() =>
                  navigate("/prescription", {
                    state: { token: a.token },
                  })
                }
              >
                Create Prescription
              </button>
            </div>
          ))
        )}
      </div>

      {/* Background circles */}
      <div style={floatingCircle1}></div>
      <div style={floatingCircle2}></div>
    </div>
  );
}

/* ================== STYLES ================== */

const layout = {
  display: "flex",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f0f4f8, #e0e7ff)",
  fontFamily: "Arial, sans-serif",
  position: "relative",
  overflow: "hidden",
};

const content = {
  flex: 1,
  padding: "40px",
  position: "relative",
  zIndex: 2,
};

const header = {
  fontSize: "32px",
  color: "#1e3a8a",
  marginBottom: "10px",
};

const subHeader = {
  fontSize: "16px",
  color: "#374151",
  marginBottom: "15px",
};

const noAppointments = {
  color: "#6b7280",
  fontStyle: "italic",
};

const card = {
  background: "#fff",
  borderRadius: "12px",
  padding: "20px",
  marginBottom: "20px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease",
};

const primaryBtn = {
  padding: "10px 22px",
  background: "linear-gradient(135deg, #6366f1, #9333ea)",
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  fontSize: "15px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px",
};

const floatingCircle1 = {
  position: "absolute",
  width: "500px",
  height: "500px",
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(99,102,241,0.3), transparent 70%)",
  top: "-150px",
  right: "-200px",
  zIndex: 1,
};

const floatingCircle2 = {
  position: "absolute",
  width: "400px",
  height: "400px",
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(147,51,234,0.3), transparent 70%)",
  bottom: "-100px",
  left: "-150px",
  zIndex: 1,
};
