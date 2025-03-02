import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";
import AdminDashboard from "./components//admin/AdminDashboard";
import Login from "./components/Login";
import InAuction from "./components/admin/InAuction";
import Managers from "./components/admin/Managers";
import Messages from "./components/admin/Messages";
import Transaction from "./components/admin/Transaction";
import Users from "./components/admin/Users";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/in-auction" element={<InAuction />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
