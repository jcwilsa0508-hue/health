import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookAppointment() {
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [appointments, setAppointments] = useState(
    () => JSON.parse(localStorage.getItem("appointments")) || []
  );

  const handleSubmit = () => {
    // 1️⃣ Appointment form validation
    if (!doctor || !date || !time || !symptoms) {
      alert("Please fill all fields!");
      return;
    }

    // 2️⃣ Profile check (LOGIC UNCHANGED)
    const profile = JSON.parse(localStorage.getItem("patientProfile"));

    if (!profile || !profile.patientName) {
      const goProfile = window.confirm(
        "⚠ First fill your details.\n\nPress OK to update your profile"
      );

      if (goProfile) {
        navigate("/profile");
      }
      return;
    }

    // 3️⃣ Token generation
    const tokenNumber = appointments.length + 1;

    // 4️⃣ Appointment object (patient details attached)
    const newAppointment = {
      token: tokenNumber,
      doctor,
      date,
      time,
      symptoms,
      status: "Upcoming",

      patientName: profile.patientName,
      age: profile.age,
      phone: profile.phone,
      bloodGroup: profile.bloodGroup,
    };

    const updated = [...appointments, newAppointment];
    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments(updated);

    alert(`Appointment booked ✔\nToken No: ${tokenNumber}`);
    navigate("/patient");
  };

  return (
    <>
      {/* ===== CSS (UNCHANGED) ===== */}
      <style>{`
        .appointment-container {
          min-height: 100vh;
          background: linear-gradient(
              rgba(15, 23, 42, 0.75),
              rgba(15, 23, 42, 0.75)
            ),
            url("https://images.unsplash.com/photo-1586773860418-d37222d8fce3");
          background-size: cover;
          padding: 40px;
        }
        .main-content {
          max-width: 1000px;
          margin: auto;
          background: #fff;
          border-radius: 18px;
          padding: 35px;
        }
        .appointment-card {
          background: #f8fafc;
          padding: 25px;
          border-radius: 16px;
        }
        .form-row {
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
        }
        .book-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg,#6366f1,#9333ea);
          color: #fff;
          border: none;
          border-radius: 14px;
        }
      `}</style>

      <div className="appointment-container">
        <div className="main-content">
          <h2>Book Appointment</h2>

          <div className="appointment-card">
            <div className="form-row">
              <label>Doctor</label>
              <select onChange={(e) => setDoctor(e.target.value)}>
                <option value="">Select Doctor</option>
                <option>Dr. John Smith</option>
                <option>Dr. Sarah Lee</option>
              </select>
            </div>

            <div className="form-row">
              <label>Date</label>
              <input type="date" onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className="form-row">
              <label>Time</label>
              <input type="time" onChange={(e) => setTime(e.target.value)} />
            </div>

            <div className="form-row">
              <label>Symptoms</label>
              <textarea onChange={(e) => setSymptoms(e.target.value)} />
            </div>

            <button className="book-btn" onClick={handleSubmit}>
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
