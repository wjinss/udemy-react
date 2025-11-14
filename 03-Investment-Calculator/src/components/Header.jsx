import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="돈가방이 보이는 로고" />
      <h1>환율 계산기</h1>
    </header>
  );
}
