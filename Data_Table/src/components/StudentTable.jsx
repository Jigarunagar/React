// src/components/StudentTable.jsx
import React from "react";

const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.length ? (
          students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.course}</td>
              <td className="action-buttons">
                <button className="edit-btn" onClick={() => onEdit(student)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => onDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default StudentTable;
