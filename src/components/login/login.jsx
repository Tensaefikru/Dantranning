import React from "react";

const LoginForm = () => {
  return (
    <div className="container">
      <form>
        <h1>Login</h1>
        <input type="text" placeholder="Username/Email"></input>
        <input type="password" placeholder="Password"></input>
        <button>Login</button>
      </form>
    </div >

  );
};
export default LoginForm;