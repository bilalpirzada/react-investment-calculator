import Header from "./components/Header"
import UserInput from "./components/UserInput"

function App() {
  return <main>
      <Header/>
      <div className="input-group">
        <div>
          <UserInput label="INITIAL INVESTMENT"/>
          <UserInput label="ANNUAL INVESTMENT"/>
        </div>
        <div>
          <UserInput label="EXPECTED RETURN"/>
          <UserInput label="DURATION"/>
        </div>
      </div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody className="center">
          <tr>
            <td>1</td>
            <td>100</td>
            <td>123</td>
            <td>4545</td>
            <td>678</td>
          </tr>
        </tbody>
      </table>
    </main> 
}

export default App
