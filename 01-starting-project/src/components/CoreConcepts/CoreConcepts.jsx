import { CORE_CONCEPTS } from "../../data";
import CoreConept from "../CoreConcept/CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Comcepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConept {...item} key={item.title} />
        ))}
      </ul>
    </section>
  );
}
