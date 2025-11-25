export default function ResultModal({ result, targetTime }) {
  return (
    <dialog className="result-modal" open>
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
