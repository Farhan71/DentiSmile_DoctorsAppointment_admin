import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import "./login.css"

const Login = () => {
  let navigate = useNavigate();; 
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    // const [success, setSuccess] = useState({});
    
    // console.log(success);
    console.log("hi");
    const handleSubmit = (e) => {
      const success = {name:"", email: "", error:""}; 
      e.preventDefault();
        const data = {email: email, password: password}
        fetch('http://localhost:5000/adminLogin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        } )
        .then (res => res.json()) 
        .then ( res => {
            
            // setSuccess(res)
            // console.log(success)
            if (res.error){
              
              success.name = "";
              success.email = "";
              success.error = res.error;
              sessionStorage.setItem('user', JSON.stringify(success));
            }
            else {
              success.name = res.name;
              success.email = res.email;
              success.error = ""; 
              sessionStorage.setItem('user', JSON.stringify(success));
              navigate("/")
            }
            
            // if (success) {
            //     setSuccess(success)
            //     console.log(success)
            //     sessionStorage.setItem('session',success) 
            // }
        })
       

    }
    return (
      <div className="container-fluid row ">
        <div className="col-md-2">
        <Sidebar></Sidebar>
        </div>
      
      
        <div className="login-page  col-md-10 d-flex align-items-center justify-content-center" style={{ height: "100vh" }}  >
        
          <div className=" shadow p-5 text-center">
            <form onSubmit={handleSubmit}  action="">
            <div className="form-group">
              <label htmlFor="">Admin Email</label>
              <input type="text" className="form-control" onChange={(e)=> {setEmail(e.target.value)}}   />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" onChange={(e)=> {setPassword(e.target.value)}} />
            </div>     
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Send</button>
            </div> 
            </form>
          </div>      
        
      </div>

      </div>
    );
};

export default Login;