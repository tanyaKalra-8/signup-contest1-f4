import React, { useState } from "react";
import style from "../Resources/style.png";
import closeEye from "../Resources/close-eye.png";
import facebook from "../Resources/facebook 1.png";
import search from "../Resources/search 1.png";

const SignUp = () => {
//   const [inputValues, setInputValues] = useState({name:"", email: "", password: "" , confirmPassword: ""});

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     //   console.log(e.target);
//       console.log({id});
//       console.log({value});
//     setInputValues((prevValues) => ({
//       ...prevValues,
//       [id]: value,
//     }));
//   };

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");
const [success, setSuccess] = useState("");

const handleNameChange = (e) => {
  setName(e.target.value);
};

const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
};

const handleConfirmPasswordChange = (e) => {
  setConfirmPassword(e.target.value);
};

// console.log({name});
// console.log({email});
// console.log({password});
// console.log({confirmPassword});

function validateForm(e){
    e.preventDefault();
    if(name.length < 3){
        setSuccess()
        setError("Error: The name should be at least 3 characters long!");
        return;
    }
    else if(!email.includes("@") || !email.includes(".")){
        setSuccess()
        setError("Error: Error: Please enter a valid email address.It should contain @ and .!");
        return;
    }
    else if(password.length < 6 || password.length > 20){
        setSuccess()
        setError("Error: The password must be between 6 and 20 characters in length!");
        return;
    }
    else if(password !== confirmPassword){
        setSuccess()
        setError("Error: Please Make sure your password and confirm password match!");
        return;
    }
    else{
        setError();
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setSuccess("Successfully Created!");
    }
}



  return (
    <div>
      <div className="container">
        <div className="left">
          <p className="desc">Find 3D Objects, Mockups and Ilustration here</p>
          <img src={style} alt="logo" className="img" />
        </div>
        <div className="right">
          <div className="wrapper">
            <h1 className="heading">Create Account</h1>
            <div className="social-login">
              <a href="https://www.google.com/">
                <img src={search} alt="google" />
                <span>Sign up with Google</span>
              </a>
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="facebook" />
                <span>Sign up with Facebook</span>
              </a>
            </div>
            <div className="or">- OR -</div>
            <form className="form" onSubmit={validateForm}>
              <div className="input-group">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className={name ? "filled" : ""}
                />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={email ? "filled" : ""}
                />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  className={password ? "filled" : ""}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label htmlFor="password">Password</label>
                <img src={closeEye} alt="close-eye" className="close-eye" />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={confirmPassword ? "filled" : ""}
                />
                <label htmlFor="confirm-password">Confirm Password</label>
                <img src={closeEye} alt="close-eye" className="close-eye" />
              </div>
              <button type= "submit" className="btn">Create Account</button>
              <span className="error">{error}</span>
              <span className="success">{success}</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
