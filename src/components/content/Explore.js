import React, { Component } from "react";
import encrypt from '../../images/encrypt.jpg'
import decrypt from '../../images/decrypt.jpg'
import pp from '../../images/pp.jpg'
import M from 'materialize-css'
import para from '../../images/para.jpg'
import datapara from '../../images/datapara.jpg'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {withRouter} from 'react-router'
import {createkey,updatekey} from '../../store/actions/contentAction'
class Explore extends Component {
  state = {
    Email:null,
    Message:null,
    Date:null,
    
  };
  handlechange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })

  }
  handlesubmit=(e)=>{
    e.preventDefault()
    this.props.createkey(this.state)
  }
  myfunction=()=> {
    setInterval(() => {
      this.props.updatekey();
    }, 900000);
  }
  componentDidMount=()=>{
    let parallax = document.querySelectorAll(".parallax")
    M.Parallax.init(parallax);
  
    let tabs = document.querySelectorAll(".tabs")
    M.Tabs.init(tabs);

    let material = document.querySelectorAll(".materialboxed")
    M.Materialbox.init(material);

    let date = document.querySelectorAll(".datepicker")
    M.Datepicker.init(date);
    
  }
  render() {
    return (
      <div onMouseOver={this.myfunction} >
        <header></header>
        <section className="container section" >
      
          <div className="row">
            <div className="col s12 l4">
              <img src={encrypt} alt="data encryption"className="side responsive-img materialboxed"/>
            </div>
            <div className="col s12 l6 offset-l1">
          <h2 className="indigo-text text-darken-4">Encryption</h2>
          <p>
            Converting your message to a secret and safe text 
          </p>
        </div>
        </div>
        <div className="row">
        <div className="col s12 l4 push-l7 offset-l1">
          <img
            src={decrypt}
            alt="Depryption"
            className="side responsive-img materialboxed"
          />
        </div>

        <div className="col s12 l6 pull-l5 right-align offset-l1">
          <h2 className="indigo-text text-darken-4">Decryption</h2>
          <p>
            Re-converting your secret message to the original one.
          </p>
        </div>
        </div>
        <div className="row">
            <div className="col s12 l4">
              <img src={pp} alt="paid partnership"className="side responsive-img materialboxed"/>
            </div>
            <div className="col s12 l6 offset-l1">
          <h2 className="indigo-text text-darken-4">Paid Partnership</h2>
          <p>
            You can collaborate with us.
          </p>
        </div>
        </div>
        </section>


        <div className="parallax-container">
          <div className="parallax">
            <img src={para} alt="parallax" className="responsive-img"/>
          </div>
        </div>
       
       
       
        
  <section className="container section scrollspy" id="services">
      <div className="row">
        <div className="col s12 l4">
          <h2 className="indigo-text text-darken-4">What I do...</h2>
          <p>
            DATA-PRIVACY is our main motive. It can be personal or professional we give
            them equal importance... Your data is encrypted or protected to the core.
          </p>
        </div>

        <div className="col s12 l6 offset-l2">
          <ul className="tabs">
            <li className="tab col s6">
              <a href="#photography" className="indigo-text text-darken-4"
                >ENCRYPTION</a
              >
            </li>
            <li className="tab col s6">
              <a href="#editing" className="indigo-text text-darken-4">DECRYPTION</a>
            </li>
          </ul>
          <div className="col s12" id="photography">
            <p className="flow-text indigo-text text-darken-4">Encryption</p>
            <p>
              Data encryption translates data into another form, or code,so that only people
              with access to a secret key or password can read it.
            </p>
          </div>

          <div className="col s12" id="editing">
            <p className="flow-text indigo-text text-darken-4">Decryption</p>
            <p>
            The conversion of encrypted data into its original form is called Decryption. 
            It is generally a reverse process of encryption.
            </p>
          </div>
        </div>
      </div>
    </section>


    <div className="parallax-container">
          <div className="parallax">
            <img src={datapara} alt="parallax" className="responsive-img"/>
          </div>
        </div>




        <div className="section container scrollspy" id="contact">
      <div className="row">
        <div className="col s12 l5">
          <h2 className="indigo-text text-darken-4">
            Get in Touch
          </h2>
          <p>
            With our team work, we provide you with accuracy, thoroughness with the total of increasing Your
            productivity .At the end you will be inspired by our responsivness.
          </p>
        </div>
        <div className="col s12 l5 offset-l2">
          <form onSubmit={this.handlesubmit}>
            <div className="input-field">
              <i className="material-icons prefix">email</i>
              <input onChange={this.handlechange}type="email" id="Email" />
              <label htmlFor="Email">Your email</label>
            </div> 

            <div className="input-field">
              <i className="material-icons prefix">message</i>
              <textarea
                onChange={this.handlechange}
                name=""
                id="Message"
                className="materialize-textarea"
              ></textarea>
              <label htmlFor="Message">Your message</label>
            </div>

            <div className="input-field">
            <i className="material-icons prefix">event_note</i>
              <input onChange={this.handlechange} type="date"  id="Date" />
              <label htmlFor="Date">choose a date</label>
            </div>

            
            <div onClick={()=>M.toast({html: 'Submitted'})}>
            <button className="btn">Submit</button></div>
            
          </form>
        </div>
      </div>
    </div>


    <footer className="page-footer grey darken-3">
      <div className="container">
        <div className="row">
          <div className="col s12 l6">
            <h5>About me</h5>
            <p>
            We are professionally certified programmers,we are not involved in
              any of the malpractices.Your data is purely protected from
              others.'PRIVACY' defines us.
            </p>
          </div>

          <div className="col s12 l4 offset-l2">
            <h5>Connect</h5>
            <ul>
              <li><a href="/" className="grey-text text-lighten-3">Facebook</a></li>
              <li>
                <a href="/" className="grey-text text-lighten-3">Instagram</a>
              </li>
              <li><a href="/" className="grey-text text-lighten-3">Twitter</a></li>
              <li>
                <a href="/" className="grey-text text-lighten-3">Linked In</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright grey darken-4">
        <div className="container center-align">
          &copy;  copyright 2020
        </div>
      </div>
    </footer>



      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    updatekey: () => dispatch(updatekey()),
    createkey:(privates)=>dispatch(createkey(privates)),

  }
}

export default withRouter(
  compose(
  connect(null,mapDispatchToProps),
  firestoreConnect([
    {
      collection:"feedback"
    }
  ])
)(Explore));
