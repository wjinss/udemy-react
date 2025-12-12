import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  // selectedProject이 undefined이면 프로젝트가 없다이고, null일 경우 프로젝트를 추가한다는 뜻
  // projects는 나중에 유저가 생성한 프로젝트들을 추가하기 위함

  // 새로운 프로젝트를 만들 때 사용하는 함수
  function handleStartAddProject() {
    // 프로젝트의 이전 상태를 기반으로 업데이트
    setProjectState((prevState) => {
      return {
        ...prevState,
        // 이전 상태의 객체의 값을 다 가져옴(복사)
        selectedProjectId: null,
        // null값으로 변경해 프로젝트를 추가한다고 명시
      };
    });
  }

  function handelCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  // 새 프로젝트 추가하는 함수
  // 함수가 호출되는 위치에서 프로젝트의 데이터를 매개변수로 받아옴 > NewProject컴포넌트의 onAdd함수에 전달되는 ref객체
  function handleAddProject(projectData) {
    // 프로젝트의 이전 상태를 기반으로 업데이트
    setProjectState((prevState) => {
      // Math.random()으로 각 프로젝트마다의 id값 부여
      const projectID = Math.random();
      // 새 프로젝트 추가를 위한 객체
      const newProject = {
        // 받은 매개변수(프로젝트 데이터)를 복사
        ...projectData,
        id: projectID,
      };

      return {
        // 기존 데이터를 새로 반환된 객체에 복사
        ...prevState,
        // 저장버튼 클릭 시 화면에 폴백 img를 보여주기 위함
        selectedProjectId: undefined,
        // 기존 프로젝트를 유지하면서 프로젝트 업데이트하며 새 프로젝트 객체를 추가
        projects: [...prevState.projects, newProject],
      };
    });
  }

  // 조건부 렌더링을 위한 변수 설정
  let content;

  // selectedProjectId가 null일때, 즉 새 프로젝트를 추가할때
  if (projectsState.selectedProjectId === null) {
    // handleAddProject는 NewProject컴포넌트에서 호출 받아야되기 때문에 onAdd로 연결
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handelCancelAddProject} />
    );
  }
  // // selectedProjectId가 undefined일때, 즉 프로젝트가 없을 때
  else if (projectsState.selectedProjectId === undefined) {
    // handleStartAddProject함수와 연결
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      {/* handleStartAddProject함수와 연결 */}
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {/* 프로젝트 조건부 렌더링 */}
      {content}
    </main>
  );
}

export default App;

// ------------------------------------------------------------------------------

() => {
  function App() {
    const [projectsState2, setProjectState2] = useState({
      selectedProjectId: undefined,
      project: [],
    });

    function handleStartAddProject2() {
      setProjectState2((prevState) => {
        return {
          ...prevState,
          selectedProjectId: null,
        };
      });
    }

    function handleAddProject2(projectData2) {
      setProjectState2((prevState) => {
        const newProject = {
          ...projectData2,
          id: Math.random(),
        };

        return {
          ...prevState,
          project: [...prevState.project, newProject],
        };
      });
    }

    let conntent2;

    if (projectsState2.selectedProjectId === null) {
      conntent2 = <NewProject onAdd={handleAddProject2} />;
    } else if (projectsState2.selectedProjectId === undefined) {
      conntent2 = (
        <NoProjectSelected onStartAddProject={handleStartAddProject2} />
      );
    }

    return (
      <main>
        <Sidebar onStartAddProject={handleStartAddProject2} />
        {conntent2}
      </main>
    );
  }
};
