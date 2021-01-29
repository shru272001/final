import React from "react";

import {signOut} from "../../store/actions/authAction"
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
const SignedIn = (props) => {
  return (
   <div>
     
      <li>
        <NavLink to="/encrypt">Encrypt</NavLink>
      </li>
      <li>
        <NavLink to="/decrypt">Decrypt</NavLink>
      </li>
      
     <li>
        <a href=" " onClick={props.signOut}>Log Out</a>
      </li>
      </div>
     
  );
};
const mapDispatchToProps =(dispatch)=>{
  return{
    signOut : ()=> dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedIn);
