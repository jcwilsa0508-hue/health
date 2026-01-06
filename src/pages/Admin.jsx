import Sidebar from "../component/Sidebar";
import Header from "../component/Header";

export default function Admin() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="admin" />

      <div style={{ padding: "20px" }}>
        <Header title="Admin Dashboard" subtitle="Admin Access Only" />
        <p>Simple admin dashboard</p>
      </div>
    </div>
  );
}
