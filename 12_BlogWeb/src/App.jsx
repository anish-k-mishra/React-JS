
import './App.css'

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL); //accing the env variables if using create react app
  console.log(import.meta.env.VITE_APPWRITE_URL); 
  return (
    <>
      <h1>Blog App using Appwrite</h1>
    </>
  )
}

export default App
