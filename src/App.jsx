// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PatientDashboard from "./pages/PatientDashboard";
// import DoctorDashboard from "./pages/DoctorDashboard";
// import AdminDashboard from "./pages/AdminDashboard";
// import BookAppointment from "./pages/BookAppointment";
// import Prescription from "./pages/Prescription";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/profile";


// function App() {
//   return (
    
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/patient" element={<PatientDashboard />} />
//         <Route path="/doctor" element={<DoctorDashboard />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/book" element={<BookAppointment />} />
//         <Route path="/prescription" element={<Prescription />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import BookAppointment from "./pages/BookAppointment";
import Prescription from "./pages/Prescription";
import Register from "./pages/Register";
import Profile from "./pages/Profile";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        

        {/* Role based pages */}
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
  );
}
// export default App;

