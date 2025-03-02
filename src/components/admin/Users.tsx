import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Modal, Button, Form } from "react-bootstrap";
import { House, Grid, People, Messenger } from "react-bootstrap-icons";

function Users() {
  const [active, setActive] = useState("Customers");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowPopup(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    setShowPopup(false);
    navigate("/");
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white"
      style={{ width: "250px", height: "100vh" }}
    >
      <Link
        to=""
        className="d-flex align-items-center mb-3 text-white text-decoration-none"
      >
        <span className="fs-3">CollateralBid- Admin</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/admin-dashboard"
            className={`nav-link ${
              active === "Home" ? "active" : "text-white"
            }`}
            onClick={() => setActive("Home")}
          >
            <House className="me-2" /> Home
          </Link>
        </li>
        <li>
          <Link
            to="/in-auction"
            className={`nav-link ${
              active === "In-Auction" ? "active" : "text-white"
            }`}
            onClick={() => setActive("In-Auction")}
          >
            <Grid className="me-2" /> In-Auction
          </Link>
        </li>
        <li>
          <Link
            to="/transaction"
            className={`nav-link ${
              active === "Transactions" ? "active" : "text-white"
            }`}
            onClick={() => setActive("Transactions")}
          >
            <Grid className="me-2" /> Transactions
          </Link>
        </li>
        <li>
          <Link
            to="/managers"
            className={`nav-link ${
              active === "Managers" ? "active" : "text-white"
            }`}
            onClick={() => setActive("Managers")}
          >
            <People className="me-2" /> Managers
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            className={`nav-link ${
              active === "Customers" ? "active" : "text-white"
            }`}
            onClick={() => setActive("Customers")}
          >
            <People className="me-2" /> Customers
          </Link>
        </li>
        <li>
          <Link
            to="/messages"
            className={`nav-link ${
              active === "Messages" ? "active" : "text-white"
            }`}
            onClick={() => setActive("Messages")}
          >
            <Messenger className="me-2" /> Messages
          </Link>
        </li>
      </ul>
      <hr />
      <Dropdown>
        <Dropdown.Toggle
          variant="dark"
          className="d-flex align-items-center text-white border-0"
        >
          <strong>Admin</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className="bg-dark text-white">
          <Dropdown.Item as={Link} to="/profile" className="text-white">
            Profile
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/settings" className="text-white">
            Settings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout} className="text-danger">
            Sign out
          </Dropdown.Item>

          {/* logout */}
          <Modal show={showPopup} onHide={() => setShowPopup(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Logout</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to sign out?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowPopup(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={confirmLogout}>
                Sign out
              </Button>
            </Modal.Footer>
          </Modal>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Users;
