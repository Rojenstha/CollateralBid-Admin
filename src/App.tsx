import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";
import AdminDashboard from "./components//admin/AdminDashboard";
import Login from "./components/Login";
import Banks from "./components/admin/Banks";
import InAuction from "./components/admin/InAuction";
import Managers from "./components/admin/Managers";
import Messages from "./components/admin/Messages";
import Transaction from "./components/admin/Transaction";
import Users from "./components/admin/Users";
import VerifyAuction from "./components/admin/VerifyAuction";
import VerifyUser from "./components/admin/VerifyUser";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/banks" element={<Banks />} />
          <Route path="/in-auction" element={<InAuction />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/users" element={<Users />} />
          <Route path="/verifyauctions" element={<VerifyAuction />} />
          <Route path="/verifyusers" element={<VerifyUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
