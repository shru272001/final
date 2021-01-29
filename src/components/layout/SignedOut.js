import React from "react";
import { NavLink } from "react-router-dom";
const SignedOut = () => {
  return (
    <div>
     
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>

    </div>
  );
};

export default SignedOut;
