import { useState } from "react";
import SignButton from "./SignButton";
import Input from "./Input";

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
    <div
      id="auth-inputs"
      className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-linear-to-b from-stone-700 to-stone-800"
    >
      <div className="flex flex-col gap-2 mb-6">
        <Input
          label="Email"
          type="email"
          invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        ></Input>
        <Input
          label="Password"
          type="password"
          invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </div>
      <div className="flex justify-end gap-4 ">
        <button type="button" className="text-amber-400 hover:bg-amber-500">
          Create a new account
        </button>
        <SignButton onClick={handleLogin}>Sign In</SignButton>
      </div>
    </div>
  );
}

// 테일윈드 장점: 빠른 속도, 중복 이슈 x, 개인설정 및 커스텀 가능
// 단점: 클래스가 길어짐, jsx코드와 스타일코드의 분리가 명확하지 않음,
