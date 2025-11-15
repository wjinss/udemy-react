import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  // 초기 투자금, 연간 투자량, 예상 수익, 투자 기간 상태 객체로 관리(초기값 설정)
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // 인풋값에 적절한 값이 들어오는지 확인(년도수가 0보다 적어지지 않게)
  const inputIsValid = userInput.duration >= 1;

  // 새로운 값이 들어가면 이전 값이 복사되고, 매개변수로 받은 식별자에 새로운 값을 할당
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
      // +를 붙이는 이유는 문자열 값을 숫자 값으로 변환할 것을 강제
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">0보다 큰 기간을 입력해주세요!</p>
      )}
    </>
  );
}

export default App;

//--------------------------------------------------------

(function App() {
  // 초기 투자금, 연간 투자량, 예상 수익, 투자 기간의 상태를 객체로 관리(초기값을 설정한다~)
  const [userInput2, setUserInput2] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // 인풋값에 적절한 값이 들어오는지 확인(년도수가 0보다 적어지지 않게)
  const inputIsValid2 = userInput2.duration >= 1;

  // 새로운 값이 들어가면 이전 값이 복사되고, 매개변수로 받은 식별자에 새로운 값을 할당
  function handleChange2(inputIdentifier2, newValue2) {
    setUserInput2((prevUserInput2) => {
      return { ...prevUserInput2, [inputIdentifier2]: +newValue2 }; // +를 붙이는 건 문자열 값을 숫자 값으로 변환하는 것을 강제함
    });
  }

  return (
    <>
      <Header></Header>
      <UserInput onChange={handleChange2} userInput2={userInput2} />
      {inputIsValid2 ? (
        <Results input={userInput2} />
      ) : (
        <p className="center">0보다 큰 기간을 입력해주세요!</p>
      )}
    </>
  );
});
