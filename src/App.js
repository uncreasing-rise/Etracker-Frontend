import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentDashboard from "./components/StudentDashboard";
import { isAuthenticated, getUserRole } from "./utils/auth";

const App = () => {
  const userRole = isAuthenticated() ? getUserRole() : null;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {userRole === "admin" && (
        <Route path="/dashboard" element={<AdminDashboard />} />
      )}
      {userRole === "teacher" && (
        <Route path="/dashboard" element={<TeacherDashboard />} />
      )}
      {userRole === "student" && (
        <Route path="/dashboard" element={<StudentDashboard />} />
      )}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
