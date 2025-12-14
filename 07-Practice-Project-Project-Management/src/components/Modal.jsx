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

// ------------------------------------------------------------------------------

() => {
  const Modal = forwardRef(function Modal({ children, buttonCaption }) {
    const dialog = useRef();

    // useImperativeHandle함수를 사용해 open()이라는 함수를 정의(상위 컴포넌트에선 open만 사용해도 모달이 작동되게 명시)
    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });

    // 포탈을 사용해서 dom의 위치를 조정
    return createPortal(
      <dialog
        ref={dialog}
        className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      >
        {children}
        <form method="dialog">
          <ProjectButton>{buttonCaption}</ProjectButton>
        </form>
      </dialog>,
      document.getElementById("modal-root")
      // createPortal의 두 번째 인수로 dom의 위치를 선택(적용할 html요소)
    );
  });
};
