import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import TopArrowButton from './components/TopArrowButton';
import Country from './components/Country'
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {

  console.log(localStorage.getItem("isDark"))
  const getStoredTheme = () => localStorage.getItem("isDark") ? JSON.parse(localStorage.getItem("isDark")) : false

  const [isDarkMode, setIsDarkMode] = useState(getStoredTheme)

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDarkMode))

  }, [isDarkMode])

  return (
    <>
      <Header isDark={isDarkMode} setIsDark={setIsDarkMode} />
      <Routes>
        <Route path='/' element={<Body isDark={isDarkMode} />} />
        <Route path='/Country/:name' element={<Country isDark={isDarkMode} />} />
        <Route path='/Rest-Countries-App' element={<Navigate to="/" replace />} />
      </Routes>
      <TopArrowButton isDark={isDarkMode} />



    </>
  );
}

export default App;
// children={<Route path='/Country/:name' element={<Country />} />}