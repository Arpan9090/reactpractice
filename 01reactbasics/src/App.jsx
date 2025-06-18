import { useState } from "react";

function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(5)

  let addValue = () => {
    if(counter < 9){

      counter = counter + 1;
      setCounter(counter)
    }
  }

  let decValue = () => {
    if(counter > 0){

      counter = counter - 1
    }
    setCounter(counter)
  }
  return (
    <>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={decValue}>Decrease value {counter}</button>
    </>
  )
}

export default App
