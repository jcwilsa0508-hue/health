import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADD

export default function BookAppointment() {
  const navigate = useNavigate(); // ✅ ADD

  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [appointments, setAppointments] = useState(
    () => JSON.parse(localStorage.getItem("appointments")) || []
  );

  const handleSubmit = () => {
    if (!doctor || !date || !time || !symptoms) {
      alert("Please fill all fields!");
      return;
    }

    const tokenNumber = appointments.length + 1;

    const newAppointment = {
      token: tokenNumber,
      doctor,
      date,
      time,
      symptoms,
      status: "Upcoming",
    };

    const updatedAppointments = [...appointments, newAppointment];
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);

    alert(`Appointment booked successfully ✔\nYour Token No: ${tokenNumber}`);

    // ✅ RESET FORM
    setDoctor("");
    setDate("");
    setTime("");
    setSymptoms("");

    // ✅ REDIRECT TO PATIENT DASHBOARD
    navigate("/patient");
  };

  return (
    <>
      {/* ===== CSS ===== */}
      <style>{`
        .appointment-container {
          min-height: 100vh;
          background: linear-gradient(
              rgba(15, 23, 42, 0.75),
              rgba(15, 23, 42, 0.75)
            ),
            url("https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1950&q=80");
          background-size: cover;
          background-position: center;
          padding: 40px;
          font-family: "Segoe UI", sans-serif;
        }

        .main-content {
          max-width: 1000px;
          margin: auto;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 18px;
          padding: 35px 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }

        .appointment-card {
          background: #f8fafc;
          border-radius: 16px;
          padding: 25px;
        }

        .form-row {
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
        }

        .form-row input,
        .form-row select,
        .form-row textarea {
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #cbd5f5;
        }

        .book-btn {
          width: 100%;
          padding: 14px;
          font-weight: bold;
          color: #fff;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          background: linear-gradient(135deg, #6366f1, #9333ea);
        }
      `}</style>

      {/* ===== UI ===== */}
      <div className="appointment-container">
        <div className="main-content">
          <h2>Book an Appointment</h2>

          <div className="appointment-card">
            <div className="form-row">
              <label>Doctor</label>
              <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
                <option value="">Select Doctor</option>
                <option value="Dr. John Smith">Dr. John Smith</option>
                <option value="Dr. Sarah Lee">Dr. Sarah Lee</option>
              </select>
            </div>

            <div className="form-row">
              <label>Date</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className="form-row">
              <label>Time</label>
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>

            <div className="form-row">
              <label>Symptoms</label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />
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
