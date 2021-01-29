import React, { Component } from "react";
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {withRouter} from 'react-router'
import M from'materialize-css'
import {Redirect} from 'react-router-dom'
class Encrypt extends Component {
  state = {
    msg: "",
    ouput:null
  };
  handlechange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handlesubmit = (e) => {
    e.preventDefault();
    // var pos = 0,
    //   newpos = "",
    //   newchar = "";
    // const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // const key = this.props.encrypt
    // var newmsg = "";
    // const message = this.state.msg;
    // var i;
    // for (i = 0; i < message.length; i++) {
    //   pos = alphabet.indexOf(message[i]);
    //   newpos = (pos + key) % 26;
    //   newchar = alphabet[newpos];
    //   newmsg += newchar;
    // }
    var alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',"aa"]
    var mess=(this.state.msg).toLowerCase(),as,newpos,pos,ds,ch="",newms="";
    var pos,i,newpos,newmsg="",newchar="";
    //var message= (this.state.msg).toLowerCase()
    var key=this.props.encrypt
    
    
    console.log(newmsg)
    this.setState({
      output:newmsg
    })

  };

  render() {
  const {auth}=this.props
  if (!auth.uid) return <Redirect to="/login"></Redirect>;
    return (
      <div className="red darken-1">
      <div className="encrypt z-depth-5">
     <div className="card-hh white  "> 
       <form  onSubmit={this.handlesubmit}>
         <h4>ENCRYPTION</h4>
          <div className="input-field ">
            <label htmlFor="msg">Enter message</label>
            <input type="text" id="msg" onChange={this.handlechange} />
          </div>
          <div className="flow-text black center white-text" onCopy={()=>M.toast({html: 'You COPYED this text'})}>
          {this.state.output}
          </div>
          <br></br>
          <button className="btn">Submit</button>
        </form>
        
      </div>
      </div>
  
      </div>
      
    );
  }
}
const mapStateToProps=(state,ownProps)=>{
  const encrypt = state.firestore.data.keyss?
   state.firestore.data.keyss.sy9aFqHQvyajXRELtbde?state.firestore.data.keyss.sy9aFqHQvyajXRELtbde.keys:null:null
 
  return {
    encrypt:encrypt,
    auth: state.firebase.auth
  }
}

export default withRouter(
  compose(
  connect(mapStateToProps,null),
  firestoreConnect([
    {
      collection:"keyss"
    }
  ])
  )(Encrypt));
//encrypt
// for (i=0;i<message.length;i++){
    //     if (alpha.indexOf(message[i])>=0){
    //       pos=alpha.indexOf(message[i])
    //      }
    //      else{
    //        pos=52
    //      }
    //     var space=52+key
    //     newpos=pos+key
    //     if (newpos==space){
    //       newchar=" "
    //      }
    //     else{
    //     newchar=alpha[newpos]}
    //     newmsg+=newchar
        
    // }
  //decrypt

//   for (var i=0;i<mess.length;i++){
//     if (alpha.indexOf(mess[i])>=0){
//       as=alpha.indexOf(mess[i])
//       ds=alpha.indexOf(mess[i],25)
//       if(as-key<0){
//         pos=ds
//     }
//     else{
//         pos=as
//     }
//           }
//             else{
//               pos=52
//             }
//     var space=52-key
//     newpos=pos-key
//     if (newpos==space){
//              newchar=" "
//             }
//            else{
//            newchar=alpha[newpos]}
//           newmsg+=newchar
// }