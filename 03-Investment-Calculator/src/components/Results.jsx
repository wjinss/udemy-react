import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
  // 계산식에 인풋의 상태 넣기
  const resultData = calculateInvestmentResults(input);

  console.log(resultData);

  return <p>결과...</p>;
}
