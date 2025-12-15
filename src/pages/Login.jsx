import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import useInput from "../hooks/useInput";
import Input from "../components/input";
import { hasMinLength, isEmail, isNotEmpty } from "../utils/validation";

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const cardColor = theme === "dark" ? "text-bg-dark" : "text-bg-light";
  const btnColor = theme === "dark" ? "light" : "dark";

  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 5));

  function handleFromSubmit(e) {
    e.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log("Form submitted", { email: emailValue, password: passwordValue });
  }

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-7 mx-auto">
          <div className={`card border ${cardColor}`}>
            <div className="card-header">
              <h1 className="h4 mb-0">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleFromSubmit}>
                <Input
                  labelText="Email"
                  id="email"
                  name="email"
                  value={emailValue}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  type="email"
                  error={emailHasError && "Lütfen geçerli bir email giriniz"}
                ></Input>
                <Input
                  labelText="Password"
                  id="password"
                  name="password"
                  value={passwordValue}
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  type="password"
                  error={
                    passwordHasError &&
                    "Parola en az 5 karakterden oluşmalıdır."
                  }
                ></Input>
                <button className={`btn btn-outline-${btnColor}`}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
