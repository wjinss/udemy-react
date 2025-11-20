export default function TimerChallenge({ title, targetTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button type="button">챌린지 시작</button>
      </p>
      <p className="">째깍째깍..</p>
    </section>
  );
}
