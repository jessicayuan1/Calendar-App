import React, { useState } from "react";
import { LoginInput } from "./login-input";
import { useInput } from "../../hooks/use-input";

import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { useDispatch } from "react-redux";

export function LoginForm(props) {
  const [disabled] = useState(false);
  const {
    value: email,
    bind: bindEmail,
    // reset: resetEmail
  } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    // reset: resetPassword,
  } = useInput("");
  const dispatch = useDispatch();

  // function resetForm() {
  //   resetEmail();
  //   resetPassword();
  // }

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!disabled) {
      dispatch(login(email, password)).then((res) => {
        navigate("/stopwatches/");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <LoginInput placeholder="Email" type="email" bindValue={bindEmail} />
      <LoginInput
        placeholder="Password"
        type="password"
        bindValue={bindPassword}
      />
      <input
        className="my-2 border-0 px-5 py-2 rounded-pill w-75"
        type="submit"
        value="Log In"
        style={{
          backgroundColor: "#58b9ff",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      />
    </form>
  );
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(LoginForm);
