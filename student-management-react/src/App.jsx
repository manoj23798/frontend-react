import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Navbar from "./components/Navbar"
import StudentList from "./components/StudentList"
import AddStudent from "./components/AddStudent"
import StudentDetails from "./components/StudentDetails"
import "./App.css"

function App() {
  const [students, setStudents] = useState([])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentList students={students} setStudents={setStudents} />} />
        <Route path="/add" element={<AddStudent students={students} setStudents={setStudents} />} />
        <Route path="/student/:id" element={<StudentDetails students={students} />} />
      </Routes>
    </>
  )
}

export default App
