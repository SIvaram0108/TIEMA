import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './components/login-page/AdminLogin';
import StudentLogin from './components/login-page/StudentLogin';
import DepartmentLogin from './components/login-page/DepartmentLogin';
export class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dept-login" element={<DepartmentLogin />} />
      </Routes>
    )
  }
}

export default App
