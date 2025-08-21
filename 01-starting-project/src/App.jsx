import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import ConreConept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(selectedButton) {
    // console.log(selectedTopic);
    setSelectedTopic(selectedButton);
  }

  console.log("앱 컴포넌트 렌더링");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Comcepts</h2>
          <ul>
            <ConreConept {...CORE_CONCEPTS[0]} />
            <ConreConept {...CORE_CONCEPTS[1]} />
            <ConreConept {...CORE_CONCEPTS[2]} />
            <ConreConept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton label={"레이블"} /> */}

            {/* 이벤트 핸들러에 인자를 함께 전달하고 싶을 때 익명 화살표함수로 만든다. 전달만 할때는 함수 자체를  전달, 실행x  */}
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
