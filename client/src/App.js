import React from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Products from './components/Products/Products.js';
//import data from './data.json';
import './index.css';
import Filter from './components/Filter/Filter.js';
import Cart from './components/Cart/Cart.js';
import store from './store/store.js';
import {Provider} from 'react-redux'
function App() {
// const [products, setProducts] = useState(data)
// const [size,setSize] = useState('')
// const [sort, setSort]= useState('')
// const [cartItems,setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])
// const addToCart= (product)=>{
//  const cartItemsClone = [...cartItems]
//  let isProductExit= false
//  cartItemsClone.forEach(p=>{
//   if(p.id === product.id){
//     p.Qty++
//     isProductExit = true
//   }
//  })
//  if(!isProductExit){
//   cartItemsClone.push({...product,Qty:1})
//  }setCartItems(cartItemsClone)

// }

// useEffect(()=>{
//   localStorage.setItem('cartItems',JSON.stringify(cartItems))
// },[cartItems])
// const removeItem =(product)=>{
//  const cartItemsClone = [...cartItems]
//  setCartItems(cartItemsClone.filter(p=>p.id !== product.id))
// }
// console.log(cartItems)

// const handleFilterSize=(e)=>{
//  setSize(e.target.value)
//  if(e.target.value ==="ALL"){
//   setProducts(data)
//  }else{
//   let productsclone = [...products]
//   let newProducts = productsclone.filter(p=>p.sizes.indexOf(e.target.value) != -1)
//   setProducts(newProducts)
//  }
// }
// const handleFilterSort=(e)=>{
//   let order = e.target.value
//   setSort(order)
//   let productsclone = [...products]
//   let newProducts = productsclone.sort(function(a,b){
//     if(order ==='lowest'){
//       return a.price - b.price
//     }else if(order === 'highest'){
//       return b.price - a.price
//     }else{
//      return  a.id < b.id ? 1:-1
//     }
//   })
//   setProducts(newProducts)
//  }

  return (
    <Provider store={store}>
      <div className="layout">
    <Header/>
      <main>
        <div className='wrapper'>
          <Products />
          <Filter/>
          
        </div>
        <Cart  />
      </main>
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;
