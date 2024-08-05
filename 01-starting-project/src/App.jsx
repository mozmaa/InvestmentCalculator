import UserInput from "./components/UserInput.jsx"
import ResultTable from "./components/ResultTable.jsx"
import { calculateInvestmentResults } from "./util/investment.js"

function App() {

  //harcoded todo state
  const test = {
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  }

  const resultTest=  calculateInvestmentResults(test)

  return (
    <main>
      <div id="user-input">
        <UserInput label='initial investment'/>
        <UserInput label='anual investment'/>  
        <UserInput label='expected retrun'/>  
        <UserInput label='duration'/>     
      </div>
      <ResultTable result={resultTest}></ResultTable>
    </main>
  )
}

export default App
