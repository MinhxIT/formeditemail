import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
function FormError(props) {
  if (props.isHidden) {return null;}
  return (
    <div className="form-warning">
        <span className="form-text text-danger">{props.errorMessage}</span>
    </div>
  )
}
const validateInput = (checkingText) => {
  const regexp = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i; 
  if(checkingText!==""){
    if (regexp.exec(checkingText) !== null) {
      return {
          isInputValid: true,
          errorMessage: '',
          isRightEmail:'success'
      };
    } else {
        return {
            isInputValid: false,
            errorMessage: 'Sai định dạng email',
            isRightEmail:'fail'
        };
    }
  }else{
    return {
      isInputValid: false,
      errorMessage: 'Không được để trống',
      isRightEmail:"fail"
  };
  }
  
}

class Email extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        id : this.props.emailEditObj.id,
        email: this.props.emailEditObj.email,
        isInputValid: true,
        errorMessage: '',
        isRightEmail:''
    };
  }
  handleInputValidation = () => {
      const { isInputValid, errorMessage,isRightEmail } = validateInput(this.state.email);
      this.setState({
        isInputValid: isInputValid,
        errorMessage: errorMessage,
        isRightEmail: isRightEmail
      })
    }
  componentWillReceiveProps(nextProps) {
    this.setState({
      id:nextProps.emailEditObj.id,
      email:nextProps.emailEditObj.email
    })
  }
  isChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]:value});
  }
  saveButton = ()=>{
    if(this.state.isInputValid===true){ 
      var info = {};
      info.id = this.state.id; // đưa id và email vào obj Info 
      info.email = this.state.email;
      this.props.getEmailInEdit(info); // 
      const history = this.props.history;
      history.push('/');
      console.log(info);
      
    }else{
      return 0;
    }
    
  }
  render() {
    const mail =this.state.isRightEmail; 
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input 
            onChange={(event)=>this.isChange(event)}
            onBlur={this.handleInputValidation} 
            defaultValue={this.props.emailEditObj.email} 
            name="email"
            type="email" 
            className={"form-control " + this.state.isRightEmail}
            placeholder="Enter email" />
          </div>
          <FormError
            isHidden={this.state.isInputValid} 
            errorMessage={this.state.errorMessage} />
          <button onClick = {this.saveButton} type="button" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
export default withRouter(Email);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id:this.props.emailEditObj.id,
  //     email:this.props.emailEditObj.email,
  //     isInputValid: true,
  //     errorMessage: ''
  //     }
  //   }
    
  //   handleInputValidation = () => {
  //     const { isInputValid, errorMessage } = validateInput(this.state.value);
  //     this.setState({
  //       isInputValid: isInputValid,
  //       errorMessage: errorMessage
  //     })
      
  //   }
  // handleUserInput(e){
  //   const value = e.target.value;
  //   this.setState({value});
  // }
  // saveButton = ()=>{
  //   var info = {};
  //   info.id = this.props.emailEditObj.id;
  //   info.email = this.state.value;
  //   console.log("info :",info);
  //   this.props.getEmail(info);
  // }
  // render() {
  //   return (
  //     <div>
  //         <div className="container">
  //           <form>
  //               <div className="form-group">
  //                   <label>Email address</label>
  //                   <input 
  //                     onChange={(event) => this.handleUserInput(event)} 
  //                     onBlur={this.handleInputValidation}
  //                     type="email" 
  //                     name="email" 
  //                     className="form-control" 
  //                     placeholder="Enter email" 
  //                     //value = {this.state.email}
  //                     defaultValue = {this.props.emailEditObj.email}
  //                     />
  //                     <FormError
  //                     isHidden={this.state.isInputValid} 
  //                     errorMessage={this.state.errorMessage} />
  //                     <button onClick={()=>this.saveButton()} type="button" className="btn btn-outline-primary">Lưu</button>
  //               </div>
  //           </form>
  //         </div>
  //     </div>
  //   )
  // }
