import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './layouts/landing';
import Timeline from './layouts/timeline';
import Navbar from './layouts/navbar';
import Skills from './layouts/skills';
import Projects from './layouts/projects';
import BlogsLayout from './layouts/blogs';
import CtaLayout from './layouts/cta';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <LandingPage />
        <Timeline />
        <Skills />
        <Projects />
        <BlogsLayout />
        <CtaLayout />
      </Router>
    </div>
  );
}

export default App;
  