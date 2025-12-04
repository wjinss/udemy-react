export default function ProjectInput({ label, isTextarea, ...props }) {
  return (
    <p>
      <label htmlFor="">{label}</label>
      {isTextarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
