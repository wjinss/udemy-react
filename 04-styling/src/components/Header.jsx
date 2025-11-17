import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
    // 퓨어css는 스코핑이 되지 않기에, 헤더 컴포넌트의 스타일이 다른 컴포넌트에 적용될 가능성이 있다.
  );
}
