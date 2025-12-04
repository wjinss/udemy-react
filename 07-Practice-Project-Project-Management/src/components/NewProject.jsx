import ProjectInput from "./ProjectInput";
export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancle</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <ProjectInput label="Title" />
        <ProjectInput label="Description" isTextarea />
        <ProjectInput label="Due Date" />
      </div>
    </div>
  );
}
