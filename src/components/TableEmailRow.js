import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

class TableEmailRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect:true
    }
  }
  
  editClick = ()=>{
    const history = this.props.history;
    history.push('/edit');
    this.props.editFunClick();
   }
  render() {
    return (
        <tr>
            <td>{this.props.stt + 1}</td>
            <td>{this.props.email}</td>
            <td><button onClick={()=>{this.editClick()}} type="button" className="btn btn-warning">Fix</button></td>
        </tr>
    )
  }
}
export default withRouter(TableEmailRow);