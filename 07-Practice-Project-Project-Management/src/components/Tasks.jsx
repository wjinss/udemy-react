import NewTask from "./NewTask";

export default function Tasks() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">할 일</h2>
      <NewTask />
      <p className="text-stone-800 my-4">현재 할 일 목록이 없습니다</p>
      <ul></ul>
    </section>
  );
}
