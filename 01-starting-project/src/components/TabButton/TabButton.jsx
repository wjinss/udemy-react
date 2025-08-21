export default function TabButton({ children, label, onSelect }) {
  console.log("버튼 컴포넌트 렌더링");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
      {/* <button>{label}</button> */}
    </li>
  );
}
