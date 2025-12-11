import { useRef } from "react";
import ProjectInput from "./ProjectInput";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
  const modal = useRef();

  // 각 html요소를 연결할 ref
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  // 유효한 데이터가 입력됐을 경우, App컴포넌트로 재전달
  // 입력값을 수집하는 함수
  function handleSave() {
    // html요소에 연결한 ref의 값 받아오기
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // 입력값이 빈 문자열인 경우(trim()은 여백 없애주는 메서드)
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    // handleSave함수 클릭 시 새 프로젝트 추가하는 함수도 호출 및 함수에 객체를 전달
    // 즉, NewProject컴포넌트의 input입력값을 새 프로젝트 객체에 넘기는 역할
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="닫기">
        <h2>잘못된 입력</h2>
        <p>값을 입력하지 않은 것 같습니다</p>
        <p>모든 입력칸에 유효한 값을 입력해주세요!</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="px-6 py-2 rounded-md text-stone-800 hover:text-stone-950">
              취소
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-200"
              onClick={handleSave}
            >
              저장
            </button>
          </li>
        </menu>
        <div>
          <ProjectInput type="text" label="Title" ref={title} />
          <ProjectInput label="Description" isTextarea ref={description} />
          <ProjectInput type="date" label="Due Date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}

// ------------------------------------------------------------------------------

() => {
  function NewProject2({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
      const enteredTitle = title.current.value;
      const enteredDescription = description.current.value;
      const enteredDueDate = dueDate.current.value;

      onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
      });
    }

    return (
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="px-6 py-2 rounded-md text-stone-800 hover:text-stone-950">
              취소
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md text-stone-800 hover:text-stone-950"
              onClick={handleSave}
            >
              저장
            </button>
          </li>
        </menu>
        <div>
          <ProjectInput type="text" label="Title" ref={title} />
          <ProjectInput label="Description" isTextarea ref={description} />
          <ProjectInput type="date" label="Due Date" ref={dueDate} />
        </div>
      </div>
    );
  }
};
