import React,{useState} from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Products from './components/Products/Products.js';

import data from './data.json';
import './index.css';




function App() {
const [products, setProducts] = useState(data)

  return (
    <div className="layout">
    <Header/>
      <main>
        <div className='wrapper'>
          <Products products={products}/>
        <div className='filter-wrapper'>Filter</div>

        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
