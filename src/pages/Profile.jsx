import { useState } from "react";

export default function Profile() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const saveProfile = () => {
    if (!name || !phone || !age || !bloodGroup) {
      alert("Please fill all fields");
      return;
    }

    const patientProfile = {
      id: Date.now(),
      name,
      phone,
      age,
      bloodGroup,
    };

    localStorage.setItem("patientProfile", JSON.stringify(patientProfile));
    alert("Profile saved ✅");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Patient Profile</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Phone"
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Age"
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Blood Group:</label>
        <input
          type="text"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          placeholder="Enter Blood Group"
        />
      </div>

      <button onClick={saveProfile}>Save Profile</button>
    </div>
  );
}
