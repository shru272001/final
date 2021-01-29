import React, { Component } from "react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import M from 'materialize-css'
class Navbar extends Component{
  
    componentDidMount(){
      let sidenav = document.querySelectorAll(".sidenav")
  M.Sidenav.init(sidenav)
  
  }
  
  render(){
    const {auth}=this.props

    if(auth.uid){
        M.toast({html:"Welcome,You are ready to go!!"})
return( 
    <div>
        <nav className="nav-wrapper black darken-3  ">

        <div className="container">
        <Link to="/" className="brand-logo"><i className="icont material-icons hide-on-med-and-down">https</i>Secret Code Encryptor</Link>

         <div className="left">
            <Link to="/" className="sidenav-trigger " data-target="slide_out" ><i className="material-icons">menu</i> </Link>
            </div> 
            
            <div >
            <ul className="right hide-on-med-and-down ">
            <SignedIn/>
                </ul>
                </div>
         
        </div>
        </nav>
        <ul className="sidenav" id="slide_out">
                <SignedIn/>
            </ul>
        </div>
)
    }
    else{
        return(
            <div>
            <nav className="nav-wrapper black darken-3  ">
            <div className="left">
            <Link to="/" className="sidenav-trigger" data-target="mobile" ><i className="material-icons">menu</i> </Link>
            </div> 
                <div className="container">
                   
         <Link to="/" className="brand-logo"><i className="icont hide-on-med-and-down material-icons">https</i>Secret Code Encryptor</Link> 
          <ul className="right hide-on-med-and-down"> 
                <SignedOut/>
            </ul>
            </div>
            </nav>
            <ul className="sidenav" id="mobile">
                <SignedOut/>
            </ul>
            </div>
        )
    }
    }
  }
// const Navbar = (props) => {
//   const links = props.auth.uid ? <SignedIn/>:<SignedOut/>
//   return (
//     <nav className="nav-wraper black darken-3">
//         <div className="container">
//           <Link to="/" className="brand-logo">
//             Keep it hush!
//           </Link>
//           {links}
//         </div>
//       </nav>
   
  
//   );
// };
const mapStateToProps = (state)=>{
  return{
    auth : state.firebase.auth
  }
}
export default connect(mapStateToProps)(Navbar);
