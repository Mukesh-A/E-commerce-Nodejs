import React, { useState,useEffect } from "react";
import {useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
      console.log("start");
    }
  },[]); 

  const Login = async () => {
    console.warn(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json()
    if(result.name){
        localStorage.setItem("user",JSON.stringify(result));
        navigate("/")
    }else{

    }
  };
  return ( 
    <div className="login">
      <h1>Login</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        className="inputBox"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="button" onClick={Login}>
        Login
      </button>
    </div>
  );
};

export default Login;
