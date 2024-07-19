import React from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="layout">
    <Header/>
      <main>Content</main>
      <Footer/>
    </div>
  );
}

export default App;
