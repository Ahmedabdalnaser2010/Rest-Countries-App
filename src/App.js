import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import TopArrowButton from './components/TopArrowButton';
import Country from './components/Country'
import { Route, Routes } from 'react-router';
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
        <Route path='/Country/:name' element={<Country isDark={isDarkMode} />} children={<Route path='/Country/:name' element={<Country />} />} />
      </Routes>
      <TopArrowButton isDark={isDarkMode} />



    </>
  );
}

export default App;
