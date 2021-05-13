// import React from 'react';
// import{useHistory} from 'react-router-dom';

// import{Redirect} from "react-router-dom"

// function Login() {


//   let history = useHistory();
//     {

//     }
//     return (
//         <div>

// <div>
//   <meta charSet="utf-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <title>AdminLTE 3 | Registration Page</title>
//   {/* Google Font: Source Sans Pro */}
//   <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
//   {/* Font Awesome */}
//   <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
//   {/* icheck bootstrap */}
//   <link rel="stylesheet" href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
//   {/* Theme style */}
//   <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
//   <div className="register-box">
//     <div className="register-logo">
//       <a href="../../index2.html"><b>Admin</b>LTE</a>
//     </div>
//     <div className="card">
//       <div className="card-body register-card-body">
//         <p className="login-box-msg">Register a new membership</p>
//         <form action="../../index.html" method="post">
//           <div className="input-group mb-3">
//             <input type="text" className="form-control" placeholder="Full name" />
//             <div className="input-group-append">
//               <div className="input-group-text">
//                 <span className="fas fa-user" />
//               </div>
//             </div>
//           </div>
//           <div className="input-group mb-3">
//             <input type="email" className="form-control" placeholder="Email" />
//             <div className="input-group-append">
//               <div className="input-group-text">
//                 <span className="fas fa-envelope" />
//               </div>
//             </div>
//           </div>
//           <div className="input-group mb-3">
//             <input type="password" className="form-control" placeholder="Password" />
//             <div className="input-group-append">
//               <div className="input-group-text">
//                 <span className="fas fa-lock" />
//               </div>
//             </div>
//           </div>
//           <div className="input-group mb-3">
//             <input type="password" className="form-control" placeholder="Retype password" />
//             <div className="input-group-append">
//               <div className="input-group-text">
//                 <span className="fas fa-lock" />
//               </div>
//             </div>
//           </div>
//           <div className="input-group mb-3">
//             <input type="password" className="form-control" placeholder="Address" />
//             <div className="input-group-append">
//               <div className="input-group-text">
//                 <span className="fas fa-lock" />
//               </div>
//             </div>
//           </div>

//           <div className="input-group mb-3">
//           <label>Type of Supplier</label>
//           <div className="input-group-append">
//               <div className="input-group-text">
//              <select class="dropdown" className="drop" id="Supp">
//          <option value="" >--supplier type--</option>
//         <option value="0">Trader</option>
//             <option value="1">Manufacturer</option>
//             <option value="2">wholesaler</option>
//             <option value="3">retailer</option>
//       </select>
//       <span className="fas fa-lock" />
//    </div>
//    </div>
//    </div>


//    <div className="input-group mb-3">
//    <div className="input-group-append">
//    <div className="input-group-text">


//         <select class="dropdown" className="drop"  >
//        <option value="">--Number of member--</option>
//             <option value="0">0-5</option>
//             <option value="1">5-10</option>
//             <option value="2">10-20</option>
//             <option value="3">20-50</option>
//       </select>
//       <span className="fas fa-lock" />
// </div>
// </div></div>

//  <div className="row">
//             <div className="col-8">
//               <div className="icheck-primary">
//                 <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
//                 <label htmlFor="agreeTerms">
//                   I agree to the <a href="#">terms</a>
//                 </label>
//               </div>
//             </div>
//             {/* /.col */}
//             <div className="col-4">
//               <button type="submit" className="btn btn-primary btn-block" button onClick = {() => {
//       history.push("/Registraion");
//     }}
//    >Register</button>
//             </div>
//             {/* /.col */}
//           </div>
//         </form>
//         <div className="social-auth-links text-center">
//           <p>- OR -</p>
//           <a href="#" className="btn btn-block btn-primary">
//             <i className="fab fa-facebook mr-2" />
//             Sign up using Facebook
//           </a>
//           <a href="google.com" className="btn btn-block btn-danger">
//             <i className="fab fa-google-plus mr-2" />
//             Sign up using Google+
//           </a>
//         </div>
//         <a href="/Home" className="text-center">I already have a membership</a>
//       </div>
//       {/* /.form-box */}
//     </div>{/* /.card */}
//   </div>
//   {/* /.register-box */}
//   {/* jQuery */}
//   {/* Bootstrap 4 */}
//   {/* AdminLTE App */}
// </div>





//         </div>
//     )
// }

// export default Login




// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// function Login() {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     function saveUser()
//     {
//       console.warn({email,password});
//       late data ={email,password}
//       fetch("http://3.131.142.123:5000/login",{
//         method:'POST',
//         headers:{
//           'Accept':'application/json',
//           'Content-Type':'application/json'
//         },
//         body:
//           JSON.Stringify(data)}).then((result)=>{console.warn("result",result)
//         })




//     }

// return(
//             <div>
//                 <h1>Login Page</h1>
//                 <div className="col-sm-6-offset-sm-3">
//                     <input type="text" placeholder="email" value={email} name="email"
//                         onChange={(e) => setEmail(e.target.value)}

//                         className="form-control" />
//                     <br />
//                     <input type="password" placeholder="password" name="password"
//                     value={password}

//                         onChange={(e) => setPassword(e.target.value)}
//                         className="form-control" />
//                     <br />
//                     <button onClick={saveUser} className="btn btn-primary">Save New User</button>

//                 </div>
//             </div>
//         )
//     }

//     export default Login













import React from 'react';
// import history from './history';
import './Login.css';
import { Link, withRouter } from 'react-router-dom';
// import Registration from './Registration';


// function () {

//   let history = useHistory();
// }
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("")
  // function saveUser()
  //  {
  //     console.warn({email,password});
  //     late data ={email,password}
  //      fetch("http://3.131.142.123:5000/login",{
  //       method:'POST',
  //       headers:{
  //          'Accept':'application/json',
  //         'Content-Type':'application/json'
  //       },
  //       body:
  //         JSON.Stringify(data)
  //       }).then((result)=>
  //       {
  //         //console.warn("result",result)
  //         result.json().then((resp)=>{
  //           console.warn("resp",resp)
          
  //         })
  //       }),

  //     }
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  };


  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["emailid"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      //alert("Form submitted successfully");
      this.props.history.push("/Home")
    }
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  onclick = () => {

  }
      
  render()
  
{
    return (
      <div id="main-registration-container">

        <div id="register">
          <div className="login-box">
            <div className="login-logo">
              <a href="../../index2.html"><b>JOKESTER</b></a>
            </div>
            {/* /.login-logo */}
            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <form action="../../index3.html" method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>

                  <div className=" mb-3">
                    <input type="text" className="form-control" placeholder="Email" name="emailid" onChange={this.handleChange} />
                    {/* <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div> */}
                    <div classname="errorMsg">{this.state.errors.emailid}</div>
                  </div>

                  <div className=" mb-3">
                    <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleChange} />
                    {/* <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div> */}
                    <div className="errorMsg">{this.state.errors.password}</div>
                  </div>

                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">
                          Remember Me
                  </label>
                      </div>
                    </div>
                    {/* /.col */}
                    <div className="col-4">
                      <button type="submit"  className="btn btn-primary btn-block" value="register" >Login</button>
                      {/* <Link to = "/Home">
                <button type="submit" className="btn btn-primary btn-block" value="register">Sign In</button></Link> */}
                    </div>
                    {/* /.col */}
                  </div>
                </form>
                <div className="social-auth-links text-center mb-3">
                  <p>- OR -</p>
                  {/* <a href="#" className="btn btn-block btn-primary">
              <i className="fab fa-facebook mr-2" /> Sign in using Facebook
            </a>
            <a href="#" className="btn btn-block btn-danger">
              <i className="fab fa-google-plus mr-2" /> Sign in using Google+
            </a> */}
                </div>
                {/* /.social-auth-links */}
                <p className="mb-1">
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
                <p className="mb-0">
                  <Link to="/Registration" className="text-center">Register a new membership</Link>
                </p>
              </div>
              {/* /.login-card-body */}
            </div>
          </div>
        </div>
      </div>



    );
  }
}
export default withRouter(Login);



