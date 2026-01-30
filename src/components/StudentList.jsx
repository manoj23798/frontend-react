import { useNavigate } from "react-router-dom"

function StudentList({ students, setStudents }) {
  const navigate = useNavigate()

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter(s => s.id !== id))
    }
  }

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2 className="page-title">Student List</h2>
        {students.length > 0 && (
          <span className="badge">{students.length} {students.length === 1 ? 'Student' : 'Students'}</span>
        )}
      </div>

      {students.length === 0 ? (
        <div className="empty-state">
          No students added yet. Click on "Add Student" to get started!
        </div>
      ) : (
        <div className="student-list">
          {students.map(student => (
            <div key={student.id} className="student-card">
              <div className="student-name">{student.name}</div>
              <div className="student-info"><strong>Age:</strong> {student.age}</div>
              <div className="student-info"><strong>Course:</strong> {student.course}</div>
              <div className="student-buttons">
                <button className="btn btn-primary" onClick={() => navigate(`/student/${student.id}`)}>
                  View Details
                </button>
                <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default StudentList
