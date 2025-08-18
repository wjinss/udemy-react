import componentImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import ConreConept from "./components/CoreConcept.jsx";

function App() {
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
      </main>
    </div>
  );
}

export default App;
