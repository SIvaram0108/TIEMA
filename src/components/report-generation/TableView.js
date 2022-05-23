import React, { Component } from 'react'

export class TableView extends Component {
  state = {
    values : this.props.values
  }

  filterData(report) {
    var flag=0;
    if((this.state.values[0] && report.year==this.state.values[0]) || (this.state.values[1] && report.semester==this.state.values[1])){
      return <tr>
        <td>{report.year}</td>
        <td>{report.semester}</td>
      </tr>
    }
    console.log(report);
  }
  render() {
    const reports=this.props.report;
    return (
      <div>
        <table>
        {reports.map((report) => (this.filterData(report)))}
        </table>
      </div>
    )
  }
}

export default TableView