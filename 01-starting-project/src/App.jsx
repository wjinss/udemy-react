import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Example from "./components/Example/Example.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Example />
        <CoreConcepts />
      </main>
    </>
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
