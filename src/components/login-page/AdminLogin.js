import React, { Component } from 'react'
import './LoginPage.css';
import LoginPage from './LoginPage.js';
export class AdminLogin extends Component {
  render() {
    return(
      <div>
        <h1>Admin Login</h1>
        <LoginPage />
      </div>
      )
  }
}

export default AdminLogin;