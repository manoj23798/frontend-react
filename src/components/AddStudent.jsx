import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddStudent({ students, setStudents }) {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [course, setCourse] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setStudents([...students, { id: Date.now(), name, age, course }])
    navigate("/")
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">Add New Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Enter student name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              id="age"
              className="form-input"
              placeholder="Enter age"
              value={age}
              onChange={e => setAge(e.target.value)}
              required
              min="1"
              max="120"
            />
          </div>

          <div className="form-group">
            <label htmlFor="course" className="form-label">Course</label>
            <input
              type="text"
              id="course"
              className="form-input"
              placeholder="Enter course name"
              value={course}
              onChange={e => setCourse(e.target.value)}
              required
            />
          </div>

          <div className="form-buttons">
            <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddStudent
