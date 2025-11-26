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

// 최신화
// ----------------------------------------
(function ResultModal3({ ref, targetTime, remainingTime, onReset }) {
  const dialog3 = useRef();

  const userLost2 = remainingTime <= 0; // 남은 시간이 0이거나 0보다 작을때 유저가 진 상태
  const formattedRemainingTime2 = (remainingTime / 1000).toFixed(2);
  // 남은 시간을 소수점으로 나타내는 로직 / 남은 시간을 1000으로 나눠 소수점으로 표시하고, 앞의 2자리까지 표기
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  // 점수 계산 로직: 남은 시간에서 타겟타임(초 단위)을 나눈 값을 1에서 빼고, 100을 곱한 후(백분율) 반올림처리
  // ex) 1 - (남은 시간 0.5초 / 타겟 타임 1초) => 0.5
  // 0.5 * 100 = 50 (백분율)
  // 점수는 50점

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog3.current.showModal();
      },
    };
  });
  // 컴포넌트 외부에서 접근할 수 있는 프로퍼티와 메서드를 정의할 수 있음
  // 첫 번째 인수로 ref객체, 두 번째 인수로 함수를 받는다.
  // 인수로 받는 함수는 컴포넌트롤 통해 접근할 수 있는 다른 컴포넌트에 노출돼야 하는 모든 프로퍼티와 메서드를 그룹화하는 객체를 반환
  // 즉 하위 컴포넌트가 어떻게 바뀌든 상위 컴포넌트에선 open()만 사용해 모달을 오픈할 수 있게 만듦 > 관리는 하위컴포넌트에서
  // 남용 x

  return createPortal(
    // 포탈을 사용해 모달 컴포넌트의 html위치(구조적 흐름)을 변경
    <dialog ref={dialog3} className="result-modal" onClose={onReset}>
      {userLost2 && <h2>졌습니다!</h2>}
      {/* 유저가 진 상태일때 조건부 렌더링 */}
      {!userLost2 && <h2>당신의 점수는 {score}</h2>}
      {/* 유저가 이긴 상태일때 조건부 렌더링 */}
      <p>
        시간 : <strong>{targetTime}초</strong>
      </p>
      <p>
        <strong>{formattedRemainingTime2}</strong>를 남기고 멈췄어요!
      </p>
      <form method="dialog" onClose={onReset}>
        {/* 빌트인 기능인 method="dialog"로 모달 구현 및 esc로 모달이 닫히게 onClose에 onReset연결  */}
        <button>닫기</button>
      </form>
    </dialog>,
    document.getElementById("modal")
    // createPortal의 첫 번째 인수는 jsx, 두 번째 인수는 위치할 dom요소
  );
});
