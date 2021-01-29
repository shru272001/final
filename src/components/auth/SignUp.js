import React, { Component } from "react";
import { connect } from "react-redux";
import {signUp} from "../../store/actions/authAction"

import M from 'materialize-css'
import  { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = { email: "", password: " ", firstname: "", lastname: " " };

  handlechange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  my = () =>{
    setTimeout(()=>{
      M.toast({html : 'Start'})  
    },3000)
  }

  handlesubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
    
    
   
    
  };
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="login">
      <div className="container">
        <form onSubmit={this.handlesubmit} className="signup white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>

          <div className="input-field">
          <i className="material-icons prefix">person</i>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" onChange={this.handlechange} />
          </div>
          <div className="input-field">
          <i className="material-icons prefix">person</i>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" onChange={this.handlechange} />
          </div>
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
          <div onClick={()=>M.toast({html: 'Here we go'})}>
            <button className="btn black white-text z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    uid:state.firebase.auth.uid
  };
};
const mapDispatchToProps = (dispatch) =>{
    return{
        signUp : (creds)=>dispatch(signUp(creds)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
