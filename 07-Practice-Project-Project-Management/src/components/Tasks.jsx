import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">할 일</h2>
      <NewTask onAdd={onAdd} />
      {/* 할 일 목록이 없으면 렌더링되는 폴백 메세지 */}
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">현재 할 일 목록이 없습니다</p>
      )}
      {/* 할 일 목록이 있을 때 렌더링되는 할 일 목록 리스트 */}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
