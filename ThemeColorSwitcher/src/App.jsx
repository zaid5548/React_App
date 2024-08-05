import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import ColorThemeBtn from './components/ColorThemeBtn'
import { useEffect } from 'react'
import { ColorThemeProvider } from './contexts/ColorTheme'


function App() {
  const [colorThemeMode,setColorThemeMode]=useState("black")


  const yellowTheme=()=>{
    setColorThemeMode("dark")
    document.querySelector('h2').classNameList.remove('black','white')
    document.querySelector('h2').classNameList.add('white')
  }

  const whiteTheme=()=>{
    setColorThemeMode("white")
    document.querySelector('h2').classNameList.remove('black','white')
    document.querySelector('h2').classNameList.add('black')
  }

  useEffect(() => {
    document.querySelector('html').classNameList.remove("white", "dark")
    document.querySelector('html').classNameList.add(colorThemeMode)
  }, [colorThemeMode])

  return (
    <ColorThemeProvider value={{colorThemeMode,whiteTheme,yellowTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ColorThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                <Card />
              </div>
          </div>
      </div>
    </ColorThemeProvider>
  )
}

export default App
