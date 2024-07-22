import React,{useState} from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Products from './components/Products/Products.js';

import data from './data.json';
import './index.css';
import Filter from './components/Filter/Filter.js';




function App() {
const [products, setProducts] = useState(data)
const [size,setSize] = useState('')
const [sort, setSort]= useState('')
const handleFilterSize=(e)=>{
 setSize(e.target.value)
 if(e.target.value ==="ALL"){
  setProducts(data)
 }else{
  let productsclone = [...products]
  let newProducts = productsclone.filter(p=>p.sizes.indexOf(e.target.value) != -1)
  console.log(productsclone)
  setProducts(newProducts)
 }
}
const handleFilterSort=(e)=>{
  let order = e.target.value
  setSort(order)
  let productsclone = [...products]
  let newProducts = productsclone.sort(function(a,b){
    if(order =='lowest'){
      return a.price - b.price
    }else if(order == 'highest'){
      return b.price - a.price
    }else{
     return  a.id < b.id ? 1:-1
    }
  })
  setProducts(newProducts)
 }

  return (
    <div className="layout">
    <Header/>
      <main>
        <div className='wrapper'>
          <Products products={products}/>
          <Filter
          size={size}
          sort={sort}
           handleFilterSize={handleFilterSize}
           handleFilterSort={handleFilterSort}
           />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
