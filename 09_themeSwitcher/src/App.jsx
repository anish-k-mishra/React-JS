
import './App.css'
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';
import { ThemeProvider } from './contsxts/theme'
import {useState, useEffect} from 'react'

function App() {
  const [themeMode, setThemeMode] = useState("light");

  //below we had called the functions lightTheme and darkTheme from theme.js file, but we did'nt define the function, and hence if we define the function with the same name here then the functionality of the function gets overwritten, and we can use that
  const lightTheme = ()=>{
    setThemeMode('light')
  }
  const darkTheme = ()=>{
    setThemeMode('dark')
  }

  //actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
