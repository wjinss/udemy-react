import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  // 입력값을 상태로 관리
  function handlechange(e) {
    setEnteredTask(e.target.value);
  }

  // 클릭 시 빈 문자열이면 종료하고, 아닐 때 입력값에 맞는 할 일 목록 생성 및 폼을 초기화
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
