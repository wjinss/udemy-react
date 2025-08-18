import componentImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import ConreConept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  function handleSelect() {
    console.log("안녕! 세상아! - 선택됨!");
  }
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
            <TabButton onSelect={handleSelect}>컴포넌트</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>상태</TabButton>
          </menu>
          동적 콘텐츠
        </section>
      </main>
    </div>
  );
}

export default App;
