import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import UserProfile from './components/UserProfile';


import DeveloperInfo from './types';
import { ThemeProvider } from './context/ThemeContext';


function App() {
  const [userName, setUserName] = useState('');
  const [theme, setTheme] = useState('light');
  const [developerInfo, setDeveloperInfo] = useState<DeveloperInfo | null>(null);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');


  useEffect(() => {
    //Get & set user's color scheme preference
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
    if (userPrefersDark)
      setTheme('dark')
  }, [])

  //Update the theme on the html element
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (

    <ThemeProvider value={{ theme, toggleTheme }}>

      <main className='container mx-auto min-h-screen font-mono  bg-white
       text-black dark:bg-black dark:text-white '>
        <div className='mx-auto px-4 py-8 space-y-10
      md:p-20 lg:w-2/3'>
          {/* header-- Header.tsx */}
          <Header />
          {/* SearchBar -- Search.tsx*/}
          <Search userName={userName} setUserName={setUserName} setDeveloperInfo={setDeveloperInfo} />
          {/* DevDetails - DevProfile.tsx */}
          <UserProfile developerInfo={developerInfo} />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
