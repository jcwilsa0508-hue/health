import { useNavigate } from "react-router-dom";

export default function Sidebar({ role, onMyPrescription }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "220px",
        backgroundColor: "#1f2937",
        color: "#fff",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "30px", color: "#4f46e5" }}>
        Dashboard
      </h2>

      {role === "patient" && (
        <>
          {/* Book Appointment */}
          <button
            onClick={() => navigate("/book")}
            style={btn}
          >
            Book Appointment
          </button>

          {/* My Prescription */}
          <button
            onClick={onMyPrescription}
            style={{ ...btn, background: "#374151" }}
          >
            My Prescription
          </button>
        </>
      )}
    </div>
  );
}

const btn = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  background: "#4f46e5",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};
