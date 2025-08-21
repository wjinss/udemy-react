import componentImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import ConreConept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  function handleSelect(selectedButton) {
    // selectedButton => '컴포넌트'. "jsx", "props", "state"
    console.log(`안녕! 세상아! - ${selectedButton}!`);
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

            {/* 이벤트 핸들러에 인자를 함께 전달하고 싶을 때 익명 화살표함수로 만든다. 전달만 할때는 함수 자체를  전달, 실행x  */}
            <TabButton onSelect={() => handleSelect("컴포넌트")}>
              컴포넌트
            </TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("프롭스")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("상태")}>상태</TabButton>
          </menu>
          동적 콘텐츠
        </section>
      </main>
    </div>
  );
}

export default App;
