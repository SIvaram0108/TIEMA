import React, { Component } from 'react'
import './ReportGen.css'
import {Link} from 'react-router-dom'
import TableView from './TableView';


export class ReportGen extends Component {
  constructor() {
    super();
    this.state = {
      values: [0,0,0,0,0,0,0],
      companies : ["abc company","google","amazon","xyz company","tesla"],
      departments : ['CSE','IT','ECE','EEE','MECH','CIVIL','PROD','EIE','AIDS','CSBS'],
      data : [
        { 
          role: "student",
          name : "xyz",
          id : "sec19cs054",
          year : 3,
          semester : 6,
          college : "sec",
          companyName: "Abc  company",
          domain: "software development",
          workingDays: 5,
          workingHours: 8,
        },
        { 
          role: "student",
          name : "siva",
          id : "sec19cs054",
          year : 3,
          semester : 6,
          college : "sec",
          companyName: "Google",
          domain: "web development",
          workingDays: 5,
          workingHours: 8,
        },
        { 
          role: "student",
          name : "ram",
          id : "sec19cs054",
          year : 3,
          semester : 6,
          college : "sec",
          companyName: "Amazon",
          domain: "app development",
          workingDays: 5,
          workingHours: 8,
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(e) {
    var tempValues = this.state.values;
    tempValues[parseInt(e.target.name)]=e.target.value;
    this.setState({values: tempValues});
  }

  handleSubmit(event) {
    console.log(this.state.values);
    event.preventDefault();

  }

  renderTable() {
    const report = this.state.data;
    const values=this.state.values;
    return <TableView report={report} values={values}/>
  }

  render() {
    return (
      <div>
        <form>
        <div className='grid grid-cols-4'>
          <select className='drop-down'  placeholder='academic year' name='0' onChange={(e) => this.handleChange(e)}>
            <option value="Academic Year" >Academic Year</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select className='drop-down' placeholder='semester' name='1' onChange={(e) => this.handleChange(e)}>
            <option value='Semester'>Semester</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <select className='drop-down' placeholder='dept' name='2' onChange={(e) => this.handleChange(e)}>
            <option value='Dept' >Dept</option>
            {this.state.departments.map((dept) => (<option value={dept} key={dept}>{dept}</option>))}
          </select>
          <select className='drop-down' placeholder='college' name='3' onChange={(e) => this.handleChange(e)}>
            <option value='college' >college</option>
            <option value="Sri Sairam Engineering College">Sri Sairam Engineering College</option>
            <option value="Sri Sairam Institute of Technology">Sri Sairam Institute of Technology</option>
          </select>
          <select className='drop-down' placeholder='domain' name='4'>
            <option value="domain">domain</option>
          </select>
          <select className='drop-down' placeholder='company name' name='5' onChange={(e) => this.handleChange(e)}>
            <option value='company name'>company name</option>
            {this.state.companies.map((company) => (<option value={company} key={company}>{company}</option>))}
          </select>
          <select className='drop-down'>
            <option value="working hours">working hours</option>
          </select>
          <select className='drop-down'>
            <option value="working days">working days</option>
          </select>
          </div>
          {/* <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"/> */}
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.handleSubmit}>
            Generate Report
          </Link>
          </form>
          <div>{this.renderTable}</div>
      </div>
    )
  }
}

export default ReportGen