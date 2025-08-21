export default function TabButton({ children, label, onSelect, isSelected }) {
  console.log("버튼 컴포넌트 렌더링");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
      {/* <button>{label}</button> */}
    </li>
  );
}
