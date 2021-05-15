import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './layouts/landing';
import Timeline from './layouts/timeline';
import Navbar from './layouts/navbar';
import Skills from './layouts/skills';
import Projects from './layouts/projects';
import BlogsLayout from './layouts/blogs';
import CtaLayout from './layouts/cta';

export const ThemeContext = React.createContext({theme:"light",toggle:() => {}});

function App() {
  const [toggleTheme, setToggleTheme] = useState("light");
  return (
      <div className="App">
        <ThemeContext.Provider value={{theme:toggleTheme,toggle:(value) => value ? setToggleTheme("dark") : setToggleTheme("light")}}>
          <Router>
            <Navbar />
            <LandingPage />
            <Timeline />
            <Skills />
            <Projects />
            <BlogsLayout />
            <CtaLayout />
          </Router>
          </ThemeContext.Provider>
      </div>
  );
}

export default App;
  