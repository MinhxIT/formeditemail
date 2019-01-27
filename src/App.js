import React, { Component } from 'react';
import './App.css';
import TableData from './components/TableData';
import DataEmail from './components/Data.json'
import Email from './components/Email';
import DirectURL from './routers/DirectURL';

class App extends Component {
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
      <div className="App">
        {/* <TableData getUserEdit={(info)=>this.getUserEdit(info)} dataEmailProps={this.state.dataEmail} editFun = {(data)=>{this.editData(data)}}/>
        <Email emailEditObj={this.state.emailEditObj} getEmailInEdit = {(info)=>this.getEmailInEdit(info)}/> */}
        <DirectURL/>
      </div>
    );
  }
}

export default App;
