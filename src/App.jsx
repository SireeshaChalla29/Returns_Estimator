import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const[userInput, setuserInput]= useState(
    {
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration:10,
    }
);
const inputIsValid = userInput.duration >=1;
function handleChange( inputIdentifier, newValue){
    setuserInput(prevUserInput=>{
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue
        }
    }
  );
  
}
  return (
    <div>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    {!inputIsValid && <p className = "center"> Please enter a duration</p>}
    { inputIsValid && <Results input={userInput} />}
    </div>
  )
}
export default App
