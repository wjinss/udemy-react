import { forwardRef } from "react";

export default function ResultModal({ ref, result, targetTime }) {
  return (
    <dialog ref={ref} className="result-modal">
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
      <dialog ref={ref} className="result-modal">
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
