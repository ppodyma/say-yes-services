import React from 'react';
import Main from './components/Main/Main';
import Second from './components/Second/Second';
import Third from './components/Third/Second';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Main />
      <AboutUs />
      <Second />
      <Third />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
