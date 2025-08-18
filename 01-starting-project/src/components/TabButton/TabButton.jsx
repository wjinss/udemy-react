export default function TabButton({ children, label, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
      {/* <button>{label}</button> */}
    </li>
  );
}
