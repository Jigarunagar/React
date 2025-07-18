// src/components/StudentForm.jsx
import React, { useState, useEffect } from "react";

const StudentForm = ({ addOrUpdate, currentStudent }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    roll: "",
    course: "",
  });

  useEffect(() => {
    if (currentStudent) setFormData(currentStudent);
  }, [currentStudent]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.roll) return;
    addOrUpdate(formData);
    setFormData({ id: "", name: "", roll: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="roll" value={formData.roll} onChange={handleChange} placeholder="Roll No" />
      <input name="course" value={formData.course} onChange={handleChange} placeholder="Course" />
      <button type="submit">{formData.id ? "Update" : "Add"}</button>
    </form>
  );
};

export default StudentForm;
