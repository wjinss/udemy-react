import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({
  ref,
  targetTime,
  remainingTime,
  onReset,
}) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  // 컴포넌트 외부에서 접근할 수 있는 프로퍼티와 메서드를 정의할 수 있음
  // 첫 번째 인수로 ref객체, 두 번째 인수로 함수를 받는다.
  // 인수로 받는 함수는 컴포넌트롤 통해 접근할 수 있는 다른 컴포넌트에 노출돼야 하는 모든 프로퍼티와 메서드를 그룹화하는 객체를 반환
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>졌습니다!</h2>}
      {!userLost && <h2>당신의 점수는 {score}</h2>}
      <p>
        시간 : <strong>{targetTime}초</strong>
      </p>
      <p>
        <strong>{formattedRemainingTime}</strong>를 남기고 멈췄어요!
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>닫기</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}

// ----------------------------------------
// forwardRef 버전 (리액트 19 이전)
() => {
  // forwardRef는 기존 함수를 forwardRef로 래핑해야된다
  const ForwardResultModal = forwardRef(function ResultModal(
    { result, targetTime },
    ref
    // forwardRef로 컴포넌트를 래핑하면 기존 프롭스 이외에 특수한 프롭스인 ref를 추가로 받아야한다
  ) {
    return (
      <dialog ref={dialog} className="result-modal">
        <h2>결과 : {result}</h2>
        <p>
          시간 : <strong>{targetTime}초</strong>
        </p>
        <p>
          <strong>x 초</strong>를 남기고 멈췄어요!
        </p>
        <form method="dialog">
          <button>닫기</button>
        </form>
      </dialog>
    );
  });
  // forwardRef를 사용하면 export default로 내보내야함
  // export default ForwardResultModal
};
