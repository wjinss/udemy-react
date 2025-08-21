import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import ConreConept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // console.log(selectedTopic);
    setSelectedTopic(selectedButton);
  }
  console.log("앱 컴포넌트 렌더링");
  let tabContent = <p>주제를 골라주세요!</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Comcepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item, idx) => (
              <ConreConept {...item} key={item.title} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton label={"레이블"} /> */}

            {/* 이벤트 핸들러에 인자를 함께 전달하고 싶을 때 익명 화살표함수로 만든다. 전달만 할때는 함수 자체를  전달, 실행x  */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>

          {/* 방법4 */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;

() => {
  {
    /* 방법 1 */
  }
  {
    !selectedTopic ? (
      <p>주제를 골라주세요!</p>
    ) : (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  {
    /* 방법2 */
  }
  {
    !selectedTopic ? <p>주제를 골라주세요!</p> : null;
  }
  {
    selectedTopic ? (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    ) : null;
  }
  {
    /* 방법3 */
  }
  {
    !selectedTopic && <p>주제를 골라주세요!</p>;
  }
  {
    selectedTopic && (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
};
