


import Fun from "./anish"

function App() {
  const username = "Anishh_"//we want to insert this variable to main return function so that it gets included in the html of main page
  //for inserting variables to any place we use curly braces format to insert variables. It is similar to `${variable}` in JS file. In .jsx file we just do-> {variable}
  //{} -> this is an evaluative expression, which only displays the final evaluated value of any expression, it is not javascript that we can do evaluations inside the braces. It ony returns the final expression
  return (
    <>
      <h1>Start of React with Vite | Anish Mishra, username is: {username}</h1> 
      <Fun/>
    </> //fragment can be returned in React to wrap multiple elements to make a single element.
  )
}

export default App
