import React, { Component } from 'react'
import TableEmailRow from './TableEmailRow';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
class TableData extends Component {
    
    mappingDataUser = ()=> this.props.dataEmailProps.map((value,key)=>(
        
        <TableEmailRow 
            editFunClick = {(data)=>this.props.editFun(value)} 
            key={key} 
            stt={key}
            email={value.email}
            />
    ));
    // 

  render() {
    return (
      <div>
        <div className="container">
            <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                <tr>
                    <th>STT</th>
                    <th>Email</th>
                    <th>Action</th> 
                </tr>
                </thead>
                <tbody>
                    {this.mappingDataUser()}
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
export default withRouter(TableData);