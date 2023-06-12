import React, { useState } from "react";
import { SignUpInput } from "./sign-up-input";
import { SetPasswordInput } from "./set-password";
import { useInput } from "../../hooks/use-input";

import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { useDispatch } from "react-redux";

export function SignUpForm(props) {
  const [disabled, setDisabled] = useState(true);
  const {
    value: firstname,
    bind: bindFirstName,
    reset: resetFirstName,
  } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");
  const { bind: bindConfirmPassword, reset: resetConfirmPassword } =
    useInput("");
  const dispatch = useDispatch();

  function resetForm() {
    resetFirstName();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (disabled) {
      console.log("submit denied, bad user input");
      return;
    }
    if (firstname.trim() === "") {
      console.log("cannot submit empty firstname");
      return;
    }
    dispatch(register(email, password)).then((res) => {
      resetForm();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <SignUpInput placeholder="Name" type="text" bindValue={bindFirstName} />
      <SignUpInput placeholder="Email" type="email" bindValue={bindEmail} />
      <SetPasswordInput
        setDisabled={setDisabled}
        bindValues={[bindPassword, bindConfirmPassword]}
      />
      <input
        className="my-2 border-0 px-5 py-2 rounded-pill w-75"
        type="submit"
        value="Create Account"
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

export default connect(mapStateToProps)(SignUpForm);
