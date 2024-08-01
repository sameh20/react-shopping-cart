import React from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import './index.css';
import store from './store/store.js';
import {Provider} from 'react-redux'
import {Routes,NavLink,BrowserRouter,Route} from "react-router-dom"
import Home from './pages/Home.js'
import Orders from './pages/Orders.js'
import NavBar from './components/NavBar/NavBar.js';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="layout">
    <Header/>
      <main>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/orders' element={<Orders/>} exact/>
        </Routes>
      </main>
      <Footer/>
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
