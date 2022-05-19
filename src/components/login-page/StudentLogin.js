import React, { Component } from 'react'
import './LoginPage.css';
import LoginPage from './LoginPage.js';
export class StudentLogin extends Component {
  render() {
    const login="student";
    return(
        <div>
            <h1>student Login</h1>
            <LoginPage login={login}/>
        </div>
        
      )
  }
}

export default StudentLogin;