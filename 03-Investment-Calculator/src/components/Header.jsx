import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="돈가방이 보이는 로고" />
      <h1>투자금 계산기</h1>
    </header>
  );
}

//--------------------------------------------------------

(function Header() {
  return (
    <header id="header">
      <img src={logo} alt="돈가방이 보이는 로고" />
      <h1>투자금 계산기</h1>
    </header>
  );
});
