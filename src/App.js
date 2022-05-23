import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './components/login-page/AdminLogin';
import StudentLogin from './components/login-page/StudentLogin';
import DepartmentLogin from './components/login-page/DepartmentLogin';
import ReportGen from './components/report-generation/ReportGen';
import TableView from './components/report-generation/TableView';
export class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dept-login" element={<DepartmentLogin />} />
        <Route path="/report" element={<ReportGen />} />
        <Route path="/reporttable" element={<TableView />} />
      </Routes>
    )
  }
}

export default App
