import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  // selectedProject이 undefined이면 프로젝트가 없다이고, null일 경우 프로젝트를 추가한다는 뜻
  // projects는 나중에 유저가 생성한 프로젝트들을 추가하기 위함
  // tasks는 프로젝트 내부의 할 일 목록을 추가하기 위함

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

  // 취소 버튼을 눌러 프로잭트를 만들기를 취소할 때 사용하는 함수
  function handelCancelAddProject() {
    // 프로젝트의 이전 상태를 기반으로 업데이트
    setProjectState((prevState) => {
      return {
        // 이전 상태의 객체의 값을 다 가져옴(복사)
        ...prevState,
        // undefined 값으로 변경해 프로젝트를 없앤다고 명시
        selectedProjectId: undefined,
      };
    });
  }

  // 사이드바에서 프로젝트를 선택할때 사용되는 함수
  function handleSelectedProject(id) {
    // 프로젝트의 이전 상태를 기반으로 업데이트
    setProjectState((prevState) => {
      return {
        // 이전 상태의 객체의 값을 다 가져옴(복사)
        ...prevState,
        // 프로젝트를 선택해야 되기 때문에 값을 id로 설정
        selectedProjectId: id,
      };
    });
  }

  // 새 프로젝트 추가하는 함수
  // 함수가 호출되는 위치에서 프로젝트의 데이터를 매개변수로 받아옴 > NewProject컴포넌트의 onAdd함수에 전달되는 ref객체
  function handleAddProject(projectData) {
    // 프로젝트의 이전 상태를 기반으로 업데이트
    setProjectState((prevState) => {
      // Math.random()으로 각 프로젝트마다의 id값 부여
      const projectId = Math.random();
      // 새 프로젝트 추가를 위한 객체
      const newProject = {
        // 받은 매개변수(프로젝트 데이터)를 복사
        ...projectData,
        id: projectId,
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

  // 프로젝트를 삭제하는 함수
  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
        // 특정 id의 프로젝트를 선택 중이고, 그 프로젝트를 삭제하려고 하면은 현재 배열을 순회중인 project.id가 내가 선택한 id(prevState.selectedProjectId) 아니면 배열에 남기고, 맞으면 배열에서 없애서 (!==) 선택되지 않은 배열만 새로 반환
      };
    });
  }

  // 프로젝트 내부의 할 일을 추가하는 함수(프로젝트를 추가하는 함수와 유사)
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  // 프로젝트 내부의 할 일을 삭제하는 함수(할 일을 직접 선택하기 때문에 id를 매개변수로 받음)
  // 그 외는 프로젝트를 삭제하는 함수와 비슷
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  // 내가 특정 id의 할 일을 선택 중이고, 그 할 일을 삭제하려고 하면은 현재 배열을 순회중인 project.id가 내가 선택한 id(prevState.selectedProjectId) 아니면 배열에 남기고, 맞으면 배열에서 없애서 (!==) 선택되지 않은 배열만 새로 반환한다~ 는 개념
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  // 조건부 렌더링을 위한 변수 설정
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

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
        onSeletProject={handleSelectedProject}
        selectedProjectId={projectsState.selectedProjectId}
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
    const [projectState, setProjectState] = useState({
      selectedProjectId: undefined,
      projects: [],
      tasks: [],
    });
    // 프로젝트 상태를 객체로 저장, selectedProjectId는 프로젝트의 생성 유무를 나타내며, 프로젝트 배열에 프로젝트를 담으며, 태스크 배열엔 할 일 목록을 담는다

    // 프로젝트를 생성하는 함수, 즉 프로젝트 데이터의 틀을 잡는다고 보면 됨
    function handleStartProject() {
      setProjectState((prevState) => {
        return {
          ...prevState, // 객체의 이전 상태를 복사(값을 유지하기 위함)
          selectedProjectId: null, // null로 변경은 프로젝트를 추가한다는 의미
        };
      });
    }

    // 프로젝트를 삭제하는 함수 (프로젝트 id의 값을 undefined에서 null로 변경)
    function handleCancelAddProject() {
      setProjectState((prevState) => {
        return {
          ...prevState,
          selectedProjectId: undefined,
        };
      });
    }

    // 사이드바에서 프로젝트를 선택할 때 사용하는 함수(해당 프로젝트로 이동하기 위함(클릭 시))
    // 함수에 매개변수를 넣는 이유는 선택한 프로젝트만 해당되는 함수이기에, 클릭 시 발동하는 함수의 실행을 위해 선택된 프로젝트의 id를 매개변수로 전달
    function handleSelectedProject(id) {
      setProjectState((prevState) => {
        return {
          ...prevState,
          // 전달받은 매개변수의 값으로 프로젝트 id 변경
          selectedProjectId: id,
        };
      });
    }

    // 새 프로젝트를 추가하는 함수
    // 함수가 추가되는 위치에서 프로젝트의 데이터를 매개변수로 받아온다. > 컴포넌트의 입력값에 전달되는 데이터를 받아옴(ref데이터)
    function handleAddProject(projectData) {
      setProjectState((prevState) => {
        const projectId = Math.random(); // id값을 랜덤으로 생성
        const newProject = {
          ...projectData,
          id: projectId,
        };
        // 생성하는 프로젝트의 데이터 객체를 받아옴(매개변수로 받는 입력값을 복사 후 id 할당)
        return {
          ...prevState,
          selectedProjectId: undefined,
          projects: [...prevState.projects, newProject],
          // 프로젝트 객체에 입력값으로 받은 프로젝트 데이터 객체를 추가 및 selectedProjectId에 undefined을 부여해 프로젝트 생성이 끝났다라고 표시
        };
      });
    }

    function handleDeleteProject() {
      setProjectState((prevState) => {
        return {
          ...prevState,
          selectedProjectId: undefined, // 삭제할거니깐 id 값도 변경시켜줌
          projects: prevState.projects.filter(
            (project) => project.id !== prevState.selectedProjectId
          ), // 프로젝트 배열에서 내가 선택한 프로젝트의 id가 현재 배열에서 순회 중인 프로젝트가 아니면, 배열에 남긴다(프로젝트 배열에 남기는 것은 삭제하지 않는다는 것)
          // 즉, 내가 선택한 id가 배열을 순회중인 프로젝트의 id와 일치하면 배열에서 없앤다!(삭제한다)
        };
      });
    }

    // 특정 프로젝트 내부에서 할 일들을 추가하는 함수(프로젝트를 추가하는 함수와 유사)
    function handleAddTask(text) {
      //매개변수로 받은 text는 할 일들의 입력값
      setProjectState((prevState) => {
        const taskId = Math.random();
        const newTask = {
          text: text, // 매개변수로 받은 입력값을 새 할일 객체의 text항목의 값으로 지정
          projectId: prevState.selectedProjectId, // id는 "특정" 프로젝트 내부에 있는 할 일이니 프로젝트의 id를 가져옴
          id: taskId, // 할 일들의 id값 부여
        };
        return {
          ...prevState,
          // 프로젝트 객체의 항목들을 복사해서 가져옴
          tasks: [...prevState.tasks, newTask],
          // 프로젝트 객체의 할일 항목은 기존 항목 유지 + 새로 추가된 값으로 최신화
        };
      });
    }

    // 특정 프로젝트 내부에서 할 일들을 삭제하는 함수(프로젝트를 삭제하는 함수와 유사)
    function handleDeleteTask(id) {
      // 매개변수로 받은 id는 선택한 할 일 항목의 id
      setProjectState((prevState) => {
        return {
          ...prevState,
          tasks: prevState.tasks.filter((task) => task.id !== id),
          // 선택한 할 일 항목의 id와 프로젝트의 task배열의 특정 id가 같으면 배열에서 삭제(!==)
        };
      });
    }

    // 특정 프로젝트 찾기
    const selectedProject = projectState.projects.find((project) => {
      project.id === projectState.selectedProjectId;
    });

    // 조건부 렌더링을 위한 변수 설정 및 props로 값 넘기기
    let content = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}
      />
    );

    // 새 프로젝트를 추가할때 (selectedProjectId가 null)
    if (projectState.selectedProjectId === null) {
      content = (
        <NewProject
          onAdd={handleAddProject}
          onCancel={handleCancelAddProject}
          // 프로젝트를 추가 및 삭제할 수 있는 함수를 전달
        />
      );
    }
    // 새 프로젝트가 없을때 (selectedProjectId가 undefined)
    else if (projectState.selectedProjectId === undefined) {
      content = <NoProjectSelected onStartAddProject={handleStartProject} />;
      // 폴백 컴포넌트를 넣으며, 프로젝트를 생성할 수 있는 함수를 전달
    }

    return (
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onStartAddProject={handleStartProject}
          projects={projectState.projects}
          onSeletProject={handleSelectedProject}
          selectedProjectId={projectState.selectedProjectId}
        />
        {content}
      </main>
    );
  }
};
