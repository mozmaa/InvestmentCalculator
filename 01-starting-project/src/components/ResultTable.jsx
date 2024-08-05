import { formatter } from "../util/investment";

export default function ResultTable({result}) {

    let newResult = [...result]; //deep copy
    
    //adding newInterest checking if the year is after first and the adding the previous interest to the new one
    for (let i = 0; i <  newResult.length; i++){
        if(newResult[i].year === 1 ){
            newResult[i] = {...newResult[i],
                newInterest: newResult[i].interest}
        }else {  //checking if the year is after first and the adding the previous interest to the new one
            newResult[i] = {...newResult[i],
                newInterest: newResult[i].interest + newResult[i-1].newInterest}
        }
    }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {newResult.map((item) => {
            return (
                <tr key={item.year}>
                    <td >{item.year}</td>
                    <td >{formatter.format(item.valueEndOfYear) }</td>
                    <td >{formatter.format(item.interest)} </td>
                    <td >{formatter.format(item.newInterest)}</td>
                    <td >{formatter.format(item.valueEndOfYear - item.newInterest)  }</td>
                </tr>
            )
        })}
      </tbody>
    </table>
  );
}
