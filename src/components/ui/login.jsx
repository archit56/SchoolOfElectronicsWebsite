import React, { useState } from "react";

function Login() {
  let [heading, setHeading] = useState("");

  return (
    <div className="login-container">
      <div className="login-heading">Hello {heading}</div>

      <form className="login-form">
        <div className="form-group login-input-email">
          <input
            type="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div className="form-group login-input-password">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="btn btn-outline-secondary login-submit-btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
