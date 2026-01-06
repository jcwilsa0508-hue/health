import { useState } from "react";
import Sidebar from "../component/Sidebar";

export default function AdminDashboard() {
  const [appointments] = useState(
    () => JSON.parse(localStorage.getItem("appointments")) || []
  );

  /* ================= DYNAMIC COUNTS ================= */

  // Total Appointments
  const totalAppointments = appointments.length;

  // Unique Doctors
  const totalDoctors = new Set(
    appointments.map((a) => a.doctor)
  ).size;

  // Unique Patients
  const totalPatients = new Set(
    appointments.map((a) => a.patient)
  ).size;

  return (
    <div style={layout}>
      <Sidebar role="admin" />

      <div style={content}>
        <h2 style={header}>Admin Dashboard</h2>
        <p style={subHeader}>System Overview 👩‍💼</p>

        {/* ================= STATS ================= */}
        <div style={statsGrid}>
          <div style={statCard}>
            <h3>Total Appointments</h3>
            <p style={statNumber}>{totalAppointments}</p>
          </div>

          <div style={statCard}>
            <h3>Total Doctors</h3>
            <p style={statNumber}>{totalDoctors}</p>
          </div>

          <div style={statCard}>
            <h3>Total Patients</h3>
            <p style={statNumber}>{totalPatients}</p>
          </div>
        </div>

        {/* ================= ALL APPOINTMENTS ================= */}
        <h3 style={{ marginTop: "40px" }}>All Appointments</h3>

        {appointments.length === 0 ? (
          <p style={noAppointments}>No appointments found</p>
        ) : (
          appointments.map((a, index) => (
            <div key={index} style={appointmentCard}>
              <p><strong>Doctor:</strong> {a.doctor}</p>
              <p><strong>Patient:</strong> {a.patient}</p>
              <p><strong>Date:</strong> {a.date}</p>
              <p><strong>Time:</strong> {a.time}</p>
              <p><strong>Status:</strong> {a.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const layout = {
  display: "flex",
  minHeight: "100vh",
  background: "#f3f4f6",
  fontFamily: "Arial, sans-serif",
};

const content = {
  flex: 1,
  padding: "40px",
};

const header = {
  fontSize: "32px",
  color: "#1e3a8a",
  marginBottom: "5px",
};

const subHeader = {
  fontSize: "16px",
  color: "#374151",
  marginBottom: "25px",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
};

const statCard = {
  background: "#fff",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  textAlign: "center",
};

const statNumber = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#4f46e5",
  marginTop: "10px",
};

const appointmentCard = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
  marginBottom: "15px",
};

const noAppointments = {
  fontStyle: "italic",
  color: "#6b7280",
};
