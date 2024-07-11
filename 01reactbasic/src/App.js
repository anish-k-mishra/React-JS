import Fun from "./anish"; //improting the exported function from its original file

function App() {
  return (
    <div>

      <h1>1st React app | Anish Mishra</h1>
      { <Fun/> /*In this way exported function is returned similar to <br/> tag. Returning multiple elements creates errors, as we should return single element, so in such case we wrap all the items in a single div and then return  */}
    </div> //this practice became so common that even if we dont write div tags and simply wrap all the elements by <></>, then also it is accepted
    
  );
}

export default App;
