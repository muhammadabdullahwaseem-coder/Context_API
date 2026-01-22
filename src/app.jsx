import { useEffect, useState } from 'react'
import React from 'react'
import './app.css'
import abcImg from "./assets/abc.jpg";
import defImg from "./assets/def.png";

import Card from './component/card'
import ThemeButton from './component/Themebutton'
import { ThemeProvider } from './context/theme' 
function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
  const saved = localStorage.getItem("themeMode");
  if (saved === "dark" || saved === "light") setThemeMode(saved);
}, []);

useEffect(() => {
  const saved = localStorage.getItem("cardThemeMode");
  if (saved === "dark" || saved === "light") setThemeMode(saved);
}, []);

useEffect(() => {
  localStorage.setItem("cardThemeMode", themeMode);
}, [themeMode]);


  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
     <div className="min-h-screen flex items-center justify-center px-4 py-10">
  <div className="w-full max-w-[420px]">
     <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
      Context API Example Project
    </h1>
    <div className="flex justify-end mb-4">
      <ThemeButton />
    </div>
    <Card imageSrc={abcImg} />
    <br/>
    <br/>
    <Card imageSrc={defImg} />
    <br/>
    <br/>
    <Card imageSrc={abcImg} />
  </div>
</div>


    </ThemeProvider>
  )
}

export default App