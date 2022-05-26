import React, { Component } from 'react'
import './ReportGen.css'
import TableView from './TableView';


export class ReportGen extends Component {
  constructor() {
    super();
    this.state = {
      display : false,
      values: [0,0,0,0,0,0,0],
      companies : ["abc company","google","amazon","xyz company","tesla"],
      departments : ['CSE','IT','ECE','EEE','MECH','CIVIL','PROD','EIE','AIDS','CSBS'],
      data : [
        { 
          role: "student",
          name : "xyz",
          id : "sec19cs054",
          year : 3,
          semester : 5,
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
        { 
          role: "student",
          name : "gokul",
          id : "sec19cs054",
          year : 2,
          semester : 4,
          college : "sit",
          companyName: "Amazon",
          domain: "app development",
          workingDays: 5,
          workingHours: 8,
        },
      ],
      filteredData : [

      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(e) {
    var tempValues = this.state.values;
    if(e.target.value==='default')
      tempValues[parseInt(e.target.name)]=0;
    else
      tempValues[parseInt(e.target.name)]=e.target.value;
    this.setState({values: tempValues});
  }

  handleSubmit(event) {
    const newData=this.state.data.filter(rep => (((this.state.values[0]!=0 && rep.year == this.state.values[0]) || this.state.values[0]==0) && ((this.state.values[1]!=0 && rep.semester == this.state.values[1]) || this.state.values[1]==0)))
    console.log(this.state.values);
    event.preventDefault();
      this.setState({filteredData: newData, display:true});


  }

  renderTable() {
    const filteredData = this.state.filteredData;
    const values=this.state.values;
    // if(this.state.display === 1) 
      return <TableView filteredData={filteredData} values={values} display={this.state.display}/>
  }

  render() {
    const data=this.state.data;
    const values=this.state.values;
    return (
      <div className="page-body">
        <form className='w-full'>
        <div className='grid md:grid-cols-4 grid-cols-2'>
          <select className='drop-down'  placeholder='academic year' name='0' onChange={(e) => this.handleChange(e)}>
            <option value="default" >Academic Year</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select className='drop-down' placeholder='semester' name='1' onChange={(e) => this.handleChange(e)}>
            <option value='default'>Semester</option>
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
            <option value='default' >Dept</option>
            {this.state.departments.map((dept) => (<option value={dept} key={dept}>{dept}</option>))}
          </select>
          <select className='drop-down' placeholder='college' name='3' onChange={(e) => this.handleChange(e)}>
            <option value='default' >college</option>
            <option value="Sri Sairam Engineering College">Sri Sairam Engineering College</option>
            <option value="Sri Sairam Institute of Technology">Sri Sairam Institute of Technology</option>
          </select>
          <select className='drop-down' placeholder='domain' name='4'>
            <option value="default">domain</option>
          </select>
          <select className='drop-down' placeholder='company name' name='5' onChange={(e) => this.handleChange(e)}>
            <option value='default'>company name</option>
            {this.state.companies.map((company) => (<option value={company} key={company}>{company}</option>))}
          </select>
          <select className='drop-down'>
            <option value="default">working hours</option>
          </select>
          <select className='drop-down'>
            <option value="default">working days</option>
          </select>
          </div>
          {/* <input type="submit" value="Generate Report" className="sub-button font-bold py-2 px-4 rounded"/> */}
          {/* <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.handleSubmit}>
            Generate Report
          </Link> */}
          </form>
          <div className='flex items-center justify-center'>
            <button onClick={this.handleSubmit} className="sub-button font-bold py-2 px-2 rounded">Generate Report</button>
          </div>
          <div>{this.renderTable()}</div>
      </div>
    )
  }
}

export default ReportGen