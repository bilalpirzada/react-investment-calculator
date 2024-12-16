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
    </main> 
}

export default App
