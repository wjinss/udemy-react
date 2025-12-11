import ProjectButton from "./ProjectButton";

export default function Sidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        내 프로젝트
      </h2>
      <div>
        {/* 구조분해로 받아온 onStartAddProject을 연결 */}
        <ProjectButton onClick={onStartAddProject}>
          + 프로젝트 추가
        </ProjectButton>
      </div>
      <ul></ul>
    </aside>
  );
}

// ------------------------------------------------------------------------------

() => {
  function Sidebar({ onStartAddProject }) {
    return (
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          내 프로젝트
        </h2>
        <div>
          <ProjectButton onClick={onStartAddProject}>
            + 프로젝트 추가
          </ProjectButton>
        </div>
        <ul></ul>
      </aside>
    );
  }
};
