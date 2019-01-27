import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import TableData from '../components/TableData';
import Email from '../components/Email';
import DataEmail from '../components/Data.json'
export default class DirectURL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEmail: DataEmail, // lấy dữ liệu từ file json đưa vòa state,
      emailEditObj:{} // lưu thông tin cần sửa vào biến trung gian 
    } 
  }
  getEmailInEdit = (info)=>{
      this.setState({
        emailEditObj:info
      })
      this.state.dataEmail.forEach((value,key) => {
        if(value.id === info.id){
          value.email = info.email
        }
      });
  }
  editData = (data)=>{
    this.setState({
      emailEditObj:data // lưu thông tin mail muốn edit
    });
   console.log(data); 
  }
  render() {
    return (
      <Router>
          <div>
              <Route exact path="/" render={() => {
                  return <TableData getUserEdit={(info)=>this.getUserEdit(info)} dataEmailProps={this.state.dataEmail} editFun = {(data)=>{this.editData(data)}} />
              }} /> 
              <Route exact path="/edit" render={() => {
                  return <Email emailEditObj={this.state.emailEditObj} getEmailInEdit = {(info)=>this.getEmailInEdit(info)} />
              }} />
          </div>
      </Router>
  );
  }
}
