import React, { useEffect, useReducer, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import { studentReducer } from "./reducer/studentReducer";
import { getLocalData, setLocalData } from "./utils/localStorageUtils";
import { v4 as uuid } from "uuid";

const App = () => {
  const [students, dispatch] = useReducer(studentReducer, []);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    const data = getLocalData("students");
    dispatch({ type: "LOAD", payload: data });
  }, []);

  useEffect(() => {
    setLocalData("students", students);
  }, [students]);

  const addOrUpdate = (student) => {
    if (student.id) {
      dispatch({ type: "UPDATE", payload: student });
    } else {
      dispatch({ type: "ADD", payload: { ...student, id: uuid() } });
    }
    setCurrentStudent(null);
  };

  const handleEdit = (student) => {
    setCurrentStudent(student);
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div className="container">
      <h1>Student Data Table</h1>
      <StudentForm addOrUpdate={addOrUpdate} currentStudent={currentStudent} />
      <StudentTable students={students} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
