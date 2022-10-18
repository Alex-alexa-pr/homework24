import { useState } from "react";

const RegistrationForm = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [passwordConfirmValue, setPasswordConfirmValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailChange = (event) => {
        if (errorMessage) {
            setErrorMessage("");
          }
        setEmailValue(event.target.value);
    };

    const handlePasswordChange = (event) => {
        if (errorMessage) {
            setErrorMessage("");
          }
        setPasswordValue(event.target.value);
    };

    const handlePasswordConfirmChange = (event) => {
        if (errorMessage) {
            setErrorMessage("");
          }
        setPasswordConfirmValue(event.target.value);
    };

    const handleSubmit = (event) => {
            event.preventDefault();

            if (emailValue === "" || passwordValue === "" || passwordConfirmValue === "") {
                setErrorMessage("All fields are required");
                return;
            };

            if (!emailValue.includes("@")) {
                setErrorMessage("Please, enter valid email");
                return;
              }
            
            if (passwordValue !== passwordConfirmValue) {
                setErrorMessage("Passwords do not match");
                return;
            };
            console.log(emailValue, passwordValue, passwordConfirmValue);
          };

    const handleReset = () => {
        setEmailValue("");
        setPasswordValue("");
        setPasswordConfirmValue("");
    };

    return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>
                email:{" "}
                <input type="text" name="email" value={emailValue} onChange={handleEmailChange} />
            </label>
        </div>
        <div>
            <label>
                password:{" "}
                <input type="password" name="password" value={passwordValue} onChange={handlePasswordChange} />
            </label>
        </div>
        <div>
            <label>
                confirm password:{" "}
                <input type="password" name="confirmPassword" value={passwordConfirmValue} onChange={handlePasswordConfirmChange} />
            </label>
        </div>

        {errorMessage && <div className="error">{errorMessage}</div>}

      <button type="submit">Send</button>
      <button type="reset" onClick={handleReset}>Reset</button>
    </form>
    )
};

export default RegistrationForm;