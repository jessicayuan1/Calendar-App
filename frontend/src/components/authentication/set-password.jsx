import { useEffect } from "react";
import { usePasswordValidation } from "../../hooks/use-password-validation";

export function SetPasswordInput(props) {
  const firstPassword = props.bindValues[0].value;
  const secondPassword = props.bindValues[1].value;

  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
    usePasswordValidation({
      firstPassword,
      secondPassword,
    });

  const renderError = () => {
    if (!firstPassword && !secondPassword) {
      return;
    } else if (!validLength) {
      return <div>Minimum password length is 8 characters</div>;
    } else if (!hasNumber) {
      return <div>Password must contain a number</div>;
    } else if (!upperCase) {
      return <div>Password must contain an uppercase character</div>;
    } else if (!lowerCase) {
      return <div>Password must contain a lowercase character</div>;
    } else if (!specialChar) {
      return <div>Password must contain a special character</div>;
    } else if (!match) {
      return <div>Passwords must match</div>;
    } else {
      return;
    }
  };

  useEffect(() => {
    if (
      (!firstPassword && !secondPassword) ||
      !validLength ||
      !hasNumber ||
      !upperCase ||
      !lowerCase ||
      !specialChar ||
      !match
    ) {
      props.setDisabled(true);
    } else {
      props.setDisabled(false);
    }
  });

  return (
    <div>
      <input
        className="my-1 px-3 py-2 rounded-3 w-75"
        type="password"
        placeholder="Password"
        {...props.bindValues[0]}
        style={{
          backgroundColor: "#c4c4c4",
          border: "1px solid #ccc",
          fontWeight: "bold",
        }}
      />
      <input
        className="my-1 px-3 py-2 rounded-3 w-75"
        type="password"
        placeholder="Confirm Password"
        {...props.bindValues[1]}
        style={{
          backgroundColor: "#c4c4c4",
          border: "1px solid #ccc",
          fontWeight: "bold",
        }}
      />
      <div style={{ color: "#ff3333" }}>{renderError()}</div>
    </div>
  );
}
