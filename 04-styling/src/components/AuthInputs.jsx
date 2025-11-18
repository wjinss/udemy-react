import { useState } from "react";
import { styled } from "styled-components";

import SignButton from "./SignButton";
import Input from "./Input";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const CreateAccountButton = styled.button`
  color: #f0b322;
  border: none;

  &:hover {
    color: #f0920e;
  }
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <Input
          label="Email"
          type="email"
          $invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        ></Input>
        {/* <p>
          <Label
            $invalid={emailNotValid} // props 명명규칙(대부분 $를 붙임)
            // className={`label ${emailNotValid ? "invalid" : ""}`}
          >
            Email
          </Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            // style={{
            //   backgroundColor: emailNotValid ? "#fed2d2" : "#did5db",
            // }}
            // className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p> */}

        <Input
          label="Password"
          type="password"
          invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
        {/* <p>
          <Input
            invalid={passwordNotValid}
            // className={`label ${emailNotValid ? "invalid" : ""}`}
          >
            Password
          </Input>
          <Input
            type="password"
            // className={passwordNotValid ? "invalid" : undefined}
            invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p> */}
      </ControlContainer>
      <div className="actions">
        <CreateAccountButton
          type="button"
          // className="text-button"
        >
          Create a new account
        </CreateAccountButton>
        <SignButton
          // className="button"
          onClick={handleLogin}
        >
          Sign In
        </SignButton>
      </div>
    </div>
  );
}
