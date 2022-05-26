import React, { Component } from 'react'
import {utils, writeFile} from 'xlsx'
import './TableView.css'

export class TableView extends Component {
  // state = {
  //   values : this.props.values,
  // }

  // filterData(report) {
  //   var flag=0;
  //   if((this.state.values[0] && report.year==this.state.values[0]) || (this.state.values[1] && report.semester==this.state.values[1])){
  //     return <tr>
  //       <td>{report.year}</td>
  //       <td>{report.semester}</td>
  //     </tr>
  //   }
  //   console.log(report);
  // }

  downloadExel = () => {
    var wb = utils.book_new();
    var ws= utils.json_to_sheet(this.props.filteredData);
    utils.book_append_sheet(wb, ws, "Report1");
    writeFile(wb, "InternshipReport.xlsx");
  }

  render() {
    if(this.props.filteredData.length==0 && this.props.display==true){
      return (
        <div className='flex items-center justify-center my-10 text-white'>No Data Found</div>
      )
    }
    else {
    return (
      this.props.display && 
      <div>
        <table className='table-view table-auto border-collapse my-8 py-5'>
          <tbody>
        {/* {reports.map((report) => (this.filterData(report)))} */}
        <tr className='p-5 table-heading'>
          <td className='bg-sky-400'>name</td>
          <td className='bg-sky-400'>year</td>
          <td className='bg-sky-400'>sem</td>
          <td className='bg-sky-400'>college</td>
          <td className='bg-sky-400'>companyName</td>
          <td className='bg-sky-400'>domain</td>
          <td className='bg-sky-400'>workingDays</td>
          <td className='bg-sky-400'  >workingHours</td>
        </tr>

        {/* {
          this.props.report.filter(rep => (((this.props.values[0]!=0 && rep.year == this.props.values[0]) || this.props.values[0]==0) && ((this.props.values[1]!=0 && rep.semester == this.props.values[1]) || this.props.values[1]==0))).map(rep => <tr><td>{rep.name}</td><td>{rep.year}</td><td>{rep.semester}</td></tr>)
        } */}
        {this.props.filteredData.map((rep) => 
          <tr>
            <td>{rep.name}</td>
            <td>{rep.year}</td>
            <td>{rep.semester}</td>
            <td>{rep.college}</td>
            <td>{rep.companyName}</td>
            <td>{rep.domain}</td>
            <td>{rep.workingDays}</td>
            <td>{rep.workingHours}</td>
          </tr>
        )}
        </tbody>
        </table>
        <div className='flex items-center justify-center py-5'>
          <button className="download-btn font-bold py-2 px-4 rounded" onClick={this.downloadExel}>download report</button>
        </div>
      </div>
    )
    }
  }
}

export default TableView