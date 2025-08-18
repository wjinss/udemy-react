export default function TabButton({ children, label }) {
  function handleClick() {
    console.log("안녕! 세상아!");
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
      {/* <button>{label}</button> */}
    </li>
  );
}
