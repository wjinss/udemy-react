import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  // 계산식에 인풋의 상태 넣기
  const resultData = calculateInvestmentResults(input);

  // 초기 투자금 구하기
  // 첫 해의 투자 가치값에서 이자,연간 투자량를 뺀 값
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>년도</th>
          <th>투자 가치값</th>
          <th>연 이자</th>
          <th>총 이자</th>
          <th>투하자본</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          // 이자 합계 구하기
          // 총액에서 투자 가치값, 모든 년도의 연간 투자량 합계, 초기 투자금을 뺀 값
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          // 투하자본 구하기
          // 투자 가치값 - 총 이자 (총 투자된 양을 의미)
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={resultData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
