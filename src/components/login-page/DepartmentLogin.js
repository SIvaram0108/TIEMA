import React, { Component } from 'react' ;
import './LoginPage.css';
import LoginPage from './LoginPage.js';
export class DepartmentLogin extends Component {
  render() {
    const login="department";
    return(
        <div>
            <p>Department Login</p>
            <LoginPage login={login}/>
        </div>
      )
  }
}

export default DepartmentLogin;