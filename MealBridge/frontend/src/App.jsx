import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DonateFood from "./pages/DonateFood";
import Donations from "./pages/Donations";
import DonorDashboard from "./pages/DonorDashboard";
import ReceiverDashboard from "./pages/ReceiverDashboard";

function App() {
  return (
    <div
  style={{
    backgroundColor: "var(--bg-page)",
    minHeight: "100vh",
  }}
>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donate" element={<DonateFood />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route
          path="/receiver-dashboard"
          element={<ReceiverDashboard />}
        />
      </Routes>
    </div>
  );
}

export default App;