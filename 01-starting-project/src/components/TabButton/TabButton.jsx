export default function TabButton({ children, label, isSelected, ...props }) {
  console.log("버튼 컴포넌트 렌더링");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
      {/* <button>{label}</button> */}
    </li>
  );
}
