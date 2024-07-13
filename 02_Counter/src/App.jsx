import { useState } from 'react' //in this way hooks are inserted to our document
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15) //this way we use the hook, we use the useState hook, we pass the initial value of the variable to be updated as 15. The useState hook returns an array in which the 1st element is the counter and the 2nd element is a function setCounter
//setCounter above is a method to control the counter variable, and takes the updated variable which needs to be displayed. Once the setCounter method is called, React reacts to this and automatically changes all the locations wherever the counter variable is displayed.

  //let counter = 0; //this variable may be updated by us but will never reflect in the UI of the main page
  const addValue = ()=>{
    //counter = counter + 1;
    if(counter>=20){
      return;
    }
    setCounter(counter +1) // when this called then only the changes are reflected in the UI

  }// we updated the value of the variable to be displayed here, and also returned in the main.jsx, also, we added an onClick function which reacts to the click event, But still we found that the value which should be incremented and displayed to the screen is not being updated in the main page.
  //This is because, in React, the variable updation can be done by us, but any updation in the UI is controlled by React itself. It is done using hooks in react
  
  const decValue = ()=>{ //function to decrement the counter
    if(counter==0){
      return;
    }
    counter = counter - 1;
    setCounter(counter);
  }

  return (
    <>
      <h1>Our Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button 
      onClick={addValue}>Increment</button>
      <button
      onClick={decValue}>Decrement</button>
    </>
  )
}

export default App
