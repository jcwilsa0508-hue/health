import { useState, useEffect } from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";

export default function Patient() {
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || []
  );

  const bookAppointment = () => {
    const newAppointment = {
      id: appointments.length + 1,
      date: new Date().toLocaleString(),
    };
    const updated = [...appointments, newAppointment];
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  useEffect(() => {
    document.title = `Patient Dashboard (${appointments.length})`;
  }, [appointments]);

  return (
    <div style={page}>
      <Sidebar
        role="patient"
        bookAppointment={bookAppointment}
        appointmentCount={appointments.length}
      />

      <div style={content}>
        {/* Header */}
        <div style={hero}>
          <Header
            title="Patient Dashboard"
            subtitle="Manage and book your appointments"
          />
        </div>

        {/* Stats Card */}
        <div style={stats}>
          <div style={statCard}>
            <h3>Total Appointments</h3>
            <span>{appointments.length}</span>
          </div>
          <div style={statCard2}>
            <h3>Status</h3>
            <span>{appointments.length > 0 ? "Active" : "No Bookings"}</span>
          </div>
        </div>

        {/* Appointments */}
        <h3 style={sectionTitle}>Recent Appointments</h3>

        {appointments.length === 0 ? (
          <div style={empty}>
            <p>No appointments booked yet</p>
            <small>Use the sidebar to book one</small>
          </div>
        ) : (
          <div style={list}>
            {appointments.map((appt) => (
              <div key={appt.id} style={card}>
                <div>
                  <h4>Appointment #{appt.id}</h4>
                  <p>{appt.date}</p>
                </div>
                <span style={badge}>Confirmed</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const page = {
  display: "flex",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
};

const content = {
  flex: 1,
  padding: "30px",
};

const hero = {
  background: "linear-gradient(135deg, #4f46e5, #6366f1)",
  padding: "25px",
  borderRadius: "16px",
  color: "#fff",
  marginBottom: "30px",
};

const stats = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  marginBottom: "30px",
};

const statCard = {
  background: "#fff",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
};

const statCard2 = {
  ...statCard,
  background: "linear-gradient(135deg, #10b981, #34d399)",
  color: "#fff",
};

const sectionTitle = {
  marginBottom: "15px",
  color: "#1f2937",
};

const list = {
  display: "grid",
  gap: "15px",
  maxWidth: "700px",
};

const card = {
  background: "#fff",
  padding: "18px 22px",
  borderRadius: "14px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "0.3s",
};

const badge = {
  background: "#4f46e5",
  color: "#fff",
  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "14px",
};

const empty = {
  background: "#fff",
  padding: "30px",
  borderRadius: "14px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  maxWidth: "600px",
  textAlign: "center",
};
