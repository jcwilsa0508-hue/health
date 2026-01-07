import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Prescription() {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 Token received from DoctorDashboard
  const passedToken = location.state?.token || "";

  const [appointments, setAppointments] = useState([]);
  const [selectedToken, setSelectedToken] = useState(passedToken);
  const [medicines, setMedicines] = useState("");
  const [dosage, setDosage] = useState("");

  // 🔹 Load appointments
  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  // 🔹 Auto-select token if passed
  useEffect(() => {
    if (passedToken) {
      setSelectedToken(passedToken);
    }
  }, [passedToken]);

  // 🔥 Save Prescription (LOGIC SAME)
  const savePrescription = () => {
    if (!selectedToken || !medicines || !dosage) {
      alert("❌ Token, Medicines & Dosage required");
      return;
    }

    const selectedAppointment = appointments.find(
      (a) => String(a.token) === String(selectedToken)
    );

    if (!selectedAppointment) {
      alert("❌ Invalid token");
      return;
    }

    // ✅ Full patient + appointment details
    const newPrescription = {
      token: selectedToken,
      patientName: selectedAppointment.patientName,
      age: selectedAppointment.age,
      bloodGroup: selectedAppointment.bloodGroup,
      phone: selectedAppointment.phone,
      doctor: selectedAppointment.doctor,
      appointmentDate: selectedAppointment.date,
      prescriptionDate: new Date().toLocaleDateString(),
      medicines,
      dosage,
    };

    const existing =
      JSON.parse(localStorage.getItem("prescriptions")) || [];

    existing.push(newPrescription);
    localStorage.setItem("prescriptions", JSON.stringify(existing));

    alert("✅ Prescription saved for Token " + selectedToken);
    navigate("/doctor");
  };

  // 🔹 Selected patient preview (NEW – display only)
  const selectedPatient = appointments.find(
    (a) => String(a.token) === String(selectedToken)
  );

  return (
    <div style={page}>
      <div style={card}>
        <h2>📝 Create Prescription</h2>

        {/* TOKEN SELECT */}
        <label>Patient Token</label>
        <select
          style={input}
          value={selectedToken}
          disabled={!!passedToken}
          onChange={(e) => setSelectedToken(e.target.value)}
        >
          <option value="">-- Select Token --</option>
          {appointments.map((a, i) => (
            <option key={i} value={a.token}>
              Token {a.token} - {a.patientName}
            </option>
          ))}
        </select>

        {/* 🔥 PATIENT INFO PREVIEW */}
        {selectedPatient && (
          <div style={patientCard}>
            <p><b>Name:</b> {selectedPatient.patientName}</p>
            <p><b>Age:</b> {selectedPatient.age}</p>
            <p><b>Blood Group:</b> {selectedPatient.bloodGroup}</p>
            <p><b>Phone:</b> {selectedPatient.phone}</p>
            <p><b>Doctor:</b> {selectedPatient.doctor}</p>
          </div>
        )}

        <label>Medicines</label>
        <textarea
          style={input}
          value={medicines}
          onChange={(e) => setMedicines(e.target.value)}
        />

        <label>Dosage & Notes</label>
        <textarea
          style={input}
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
        />

        <button style={btn} onClick={savePrescription}>
          Save Prescription
        </button>
      </div>
    </div>
  );
}

/* ===== styles ===== */

const page = {
  minHeight: "100vh",
  background: "linear-gradient(135deg,#e0e7ff,#f8fafc)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const card = {
  background: "#fff",
  padding: "25px",
  width: "420px",
  borderRadius: "16px",
  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
};

const patientCard = {
  background: "#f1f5f9",
  padding: "12px",
  borderRadius: "10px",
  marginBottom: "15px",
  fontSize: "14px",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #c7d2fe",
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(135deg,#6366f1,#9333ea)",
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
};
