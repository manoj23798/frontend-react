import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-title">Student Management</div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/add" className="navbar-link">Add Student</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
