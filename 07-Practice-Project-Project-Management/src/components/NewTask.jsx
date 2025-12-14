import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handlechange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4 ">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm  bg-stone-200"
        onChange={handlechange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        할 일 추가
      </button>
    </div>
  );
}

// ------------------------------------------------------------------------------

() => {
  function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState("");
    // 초기값을 빈문자열로 설정해 제어되는 컴포넌트로 설정

    // 입력값을 상태로 관리
    function handleChange(e) {
      setEnteredTask(e.target.value);
    }

    function handleClick() {
      if (enteredTask.trim() === "") {
        return;
        // 입력값이 빈문자열(없으면)이면 함수 종료
      }
      // 값이 있으면 onAdd로 할 일 객체 생성 및 폼 초기화
      onAdd(enteredTask);
      setEnteredTask("");
    }

    return (
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={enteredTask}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          할 일 추가
        </button>
      </div>
    );
  }
};
