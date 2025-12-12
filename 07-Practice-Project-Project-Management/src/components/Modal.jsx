import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import ProjectButton from "./ProjectButton";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  // 리액트포탈을 사용하기 위해 jsx코드를 createPortal로 감싼다
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <ProjectButton>{buttonCaption}</ProjectButton>
      </form>
    </dialog>,
    document.getElementById("modal-root")
    // createPortal()의 두번째 인수로 포탈을 적용할 html요소를 입력
  );
});

export default Modal;
