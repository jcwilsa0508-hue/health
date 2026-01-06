import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    // Save registration status
    localStorage.setItem("registered", "true");

    // Set default role (patient)
    localStorage.setItem("role", "patient");

    // Redirect to login page
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>Register for Healthcare System</h2>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
