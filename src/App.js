import React, {useState} from 'react'
import './App.css';

function App() {
  const [input, changeInput] = useState("")
  const [output, changeOutput] = useState("Awaiting input and button press...")

  let parse = () => {
    let num = Number(input)

    if(!isNaN(num)){
      if(num % 5 === 0 && num % 3 === 0){
        changeOutput("MustangBronco")
      } else if(num % 5 === 0){
        changeOutput("Bronco")
      } else if(num % 3 === 0){
        changeOutput("Mustang")
      } else {
        changeOutput(num)
      }
    } else {
      changeOutput("Bad input. Please input a number")
    }
  }

  return (
    <div id="outer">
      <div id="box">
        <input onChange={(e)=>{changeInput(e.target.value)}} type="text" placeholder="number..." />
        <button onClick={()=>{parse()}}>GO</button>
      </div>
      <div id="output">{output}</div>
    </div>
  );
}

export default App;
