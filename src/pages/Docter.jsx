import Sidebar from "../component/Sidebar";
import Header from "../component/Header";

export default function Doctor() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="doctor" />

      <div style={{ padding: "20px", flex: 1 }}>
        <Header
          title="Doctor Dashboard"
          subtitle="Overview"
        />

        <p>No appointment list needed</p>
      </div>
    </div>
  );
}
