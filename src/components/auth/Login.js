import React, { Component } from "react";
import {connect} from 'react-redux'
import {signIn } from "../../store/actions/authAction"
import { Redirect } from "react-router-dom";


class Login extends Component {
  state = {
    email:"",
    password:"",
  
  };

 
  handlechange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handlesubmit=(e)=>{
    e.preventDefault()
    this.props.signIn(this.state)
 
  }
  render() {
    const {authError,auth}=this.props
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="login">
      <div className="container">
        <form onSubmit={this.handlesubmit} className="signin white">
          <h5 className="grey-text text-darken-3">Login</h5>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handlechange} />
          </div>
          <div className="input-field">
          <i className="material-icons prefix">https</i>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handlechange} />
          </div>
         
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
         <div className="black-text center">
           {authError ? <p>{authError}</p>:null}
         </div>
        </form>
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return{
    authError : state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    signIn: (creds)=>dispatch(signIn(creds)),
 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
