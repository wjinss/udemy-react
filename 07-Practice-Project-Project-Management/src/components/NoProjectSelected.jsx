import noProjectImage from "../assets/no-projects.png";
import ProjectButton from "./ProjectButton";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="빈 할 일 목록"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        프로젝트가 선택되지 않았어요
      </h2>
      <p className="text-stone-400 mb-4">
        프로젝트를 선택하거나 새로 만들어보세요!
      </p>
      <p className="mt-8">
        {/* 구조분해로 받아온 onStartAddProject을 연결 */}
        <ProjectButton onClick={onStartAddProject}>
          새 프로젝트 생성
        </ProjectButton>
      </p>
    </div>
  );
}

// ------------------------------------------------------------------------------

() => {
  function NoProjectSelected({ onStartAddProject }) {
    return (
      <div className="mt-24 text-center w-2/3">
        <img
          src={noProjectImage}
          alt="빈 할 일 목록"
          className="w-16 h-16 object-contain mx-auto"
        />
        <h2 className="text-xl font-bold text-stone-500 my-4">
          프로젝트가 선택되지 않았어요!
        </h2>
        <p className="text-stone-400 mb-4">
          프로젝트를 선택하거나 새로 만들어보세요!
        </p>
        <p className="mt-8">
          <ProjectButton onClick={onStartAddProject}>
            새 프로젝트 생성
          </ProjectButton>
        </p>
      </div>
    );
  }
};
