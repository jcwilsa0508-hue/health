import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    patientName: "",
    age: "",
    phone: "",
    bloodGroup: "",
  });

  // 🔥 KEY FIX — clear old profile on page load
  useEffect(() => {
    localStorage.removeItem("patientProfile");
  }, []);

  const saveProfile = () => {
    const { patientName, age, phone, bloodGroup } = profile;

    if (!patientName || !age || !phone || !bloodGroup) {
      alert("❌ Fill all details");
      return;
    }

    localStorage.setItem("patientProfile", JSON.stringify(profile));
    alert("✅ Profile Saved");
    navigate("/book");
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2>Patient Profile</h2>

        <input
          style={input}
          placeholder="Full Name"
          value={profile.patientName}
          onChange={(e) =>
            setProfile({ ...profile, patientName: e.target.value })
          }
        />

        <input
          style={input}
          type="number"
          placeholder="Age"
          value={profile.age}
          onChange={(e) =>
            setProfile({ ...profile, age: e.target.value })
          }
        />

        <input
          style={input}
          placeholder="Phone"
          value={profile.phone}
          onChange={(e) =>
            setProfile({ ...profile, phone: e.target.value })
          }
        />

        <select
          style={input}
          value={profile.bloodGroup}
          onChange={(e) =>
            setProfile({ ...profile, bloodGroup: e.target.value })
          }
        >
          <option value="">Blood Group</option>
          <option>O+</option><option>O-</option>
          <option>A+</option><option>A-</option>
          <option>B+</option><option>B-</option>
          <option>AB+</option><option>AB-</option>
        </select>

        <button style={btn} onClick={saveProfile}>
          Save Profile
        </button>
      </div>
    </div>
  );
}

/* ===== CSS ===== */

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f3f4f6",
};

const card = {
  background: "#fff",
  padding: "30px",
  width: "350px",
  borderRadius: "15px",
  boxShadow: "0 10px 25px rgba(0,0,0,.15)",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #c7d2fe",
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(135deg,#6366f1,#9333ea)",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
};
