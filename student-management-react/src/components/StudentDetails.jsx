import { useParams, useNavigate } from "react-router-dom"

function StudentDetails({ students }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const student = students.find(s => s.id === Number(id))

  if (!student) {
    return (
      <div className="container">
        <div className="empty-state">
          Student Not Found
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="details-container">
        <h2 className="details-title">Student Details</h2>

        <div className="details-item">
          <div className="details-label">Name</div>
          <div className="details-value">{student.name}</div>
        </div>

        <div className="details-item">
          <div className="details-label">Age</div>
          <div className="details-value">{student.age} years old</div>
        </div>

        <div className="details-item">
          <div className="details-label">Course</div>
          <div className="details-value">{student.course}</div>
        </div>

        <div style={{ marginTop: "25px" }}>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Back to Student List
          </button>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
