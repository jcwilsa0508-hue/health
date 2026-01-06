import { useState, useEffect } from "react";
import Sidebar from "../component/Sidebar";

export default function PatientDashboard() {
  const [showPrescription, setShowPrescription] = useState(false);

  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || []
  );

  const [myPrescriptions, setMyPrescriptions] = useState([]);

  // 🔥 LOAD & FILTER PRESCRIPTIONS BY TOKEN
  useEffect(() => {
    const allPrescriptions =
      JSON.parse(localStorage.getItem("prescriptions")) || [];

    const myTokens = appointments.map((a) => a.token);

    const filtered = allPrescriptions.filter((p) =>
      myTokens.includes(p.token)
    );

    setMyPrescriptions(filtered);
  }, [appointments]);

  // ❌ CANCEL APPOINTMENT
  const cancelAppointment = (index) => {
    if (!window.confirm("Cancel this appointment?")) return;

    const cancelledToken = appointments[index].token;

    const updatedAppointments = appointments.filter(
      (_, i) => i !== index
    );

    setAppointments(updatedAppointments);
    localStorage.setItem(
      "appointments",
      JSON.stringify(updatedAppointments)
    );

    // 🧹 REMOVE PRESCRIPTION FOR CANCELLED TOKEN
    const allPrescriptions =
      JSON.parse(localStorage.getItem("prescriptions")) || [];

    const updatedPrescriptions = allPrescriptions.filter(
      (p) => p.token !== cancelledToken
    );

    localStorage.setItem(
      "prescriptions",
      JSON.stringify(updatedPrescriptions)
    );

    setMyPrescriptions(
      myPrescriptions.filter((p) => p.token !== cancelledToken)
    );

    setShowPrescription(false);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f3f4f6" }}>
      <Sidebar
        role="patient"
        onMyPrescription={() => setShowPrescription(true)}
      />

      <div style={{ flex: 1, padding: "40px" }}>
        {/* ================= DASHBOARD ================= */}
        {!showPrescription && (
          <>
            <h2 style={{ color: "#1e3a8a" }}>Patient Dashboard</h2>
            <p>Welcome back 👋</p>

            <h3 style={{ marginTop: "25px" }}>📅 My Appointments</h3>

            {appointments.length === 0 ? (
              <p>No appointments booked</p>
            ) : (
              appointments.map((a, index) => (
                <div key={index} style={card}>
                  <p><strong>Token:</strong> {a.token}</p>
                  <p><strong>Doctor:</strong> {a.doctor}</p>
                  <p><strong>Date:</strong> {a.date}</p>
                  <p><strong>Time:</strong> {a.time}</p>
                  <p><strong>Status:</strong> {a.status}</p>

                  <button
                    style={cancelBtn}
                    onClick={() => cancelAppointment(index)}
                  >
                    Cancel
                  </button>
                </div>
              ))
            )}
          </>
        )}

        {/* ================= PRESCRIPTION ================= */}
        {showPrescription && (
          <>
            <h2>🧾 My Prescriptions</h2>

            {myPrescriptions.length === 0 ? (
              <p>No prescription available</p>
            ) : (
              myPrescriptions.map((p, i) => (
                <div key={i} style={card}>
                  <p><strong>Token:</strong> {p.token}</p>
                  <p><strong>Doctor:</strong> {p.doctor}</p>
                  <p><strong>Date:</strong> {p.date}</p>

                  <p><strong>Medicines:</strong></p>
                  <p>{p.medicines}</p>

                  <p><strong>Dosage:</strong></p>
                  <p>{p.dosage}</p>

                  <button style={btn} onClick={() => window.print()}>
                    Download / Print
                  </button>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  marginBottom: "15px",
  maxWidth: "520px",
};

const btn = {
  marginTop: "15px",
  padding: "12px 20px",
  background: "linear-gradient(135deg,#6366f1,#9333ea)",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const cancelBtn = {
  marginTop: "10px",
  padding: "10px 18px",
  background: "#ef4444",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};
