import logo from "../assets/logo.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={styles.paragraph}>A community of artists and art-lovers.</p>
    </header>
    // 퓨어css는 스코핑이 되지 않기에, 헤더 컴포넌트의 스타일이 다른 컴포넌트에 적용될 가능성이 있다.
  );
}

// css모듈의 장단점
// 장점: css코드가 jsx코드와 독립되어 있음
// 해당 클래스를 가져오면 그 클레스는 컴포넌트에 스코핑되어있음 > 충돌 가능성 0

// 단점: 다수의 css파일이 생성될 수 있음
