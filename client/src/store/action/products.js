import { FETCH_PRODUCTS, FILTER_SIZE, FILTER_SORT } from "./types"


export const fetchProducts =()=>{
    return (dispatch)=>{
        fetch('/api/products').then(res=>res.json()).then(data=>{
           dispatch({
            type:FETCH_PRODUCTS,
            data:data
           })
        })
    }
}


// FILTER
export const filterSize = (products,value)=>{
    return (dispatch)=>{
        let productsClone  = [...products]
        let newProducts = productsClone.filter(p=>p.sizes.indexOf(value) !== -1)

        dispatch({
            type:FILTER_SIZE,
            data:{
                size:value,
                products: value ==="ALL" ?products: newProducts
            }
        })

    }
 }

 // sort
 export const filteredSort = (products,value)=>{
    return (dispatch)=>{
        let productsclone = [...products]
  let newProducts = productsclone.sort(function(a,b){
    if(value ==='lowest'){
      return a.price - b.price
    }else if(value === 'highest'){
      return b.price - a.price
    }else{
     return  a.id < b.id ? 1:-1
    }
  });
  dispatch({
    type:FILTER_SORT,
    data:{
        sort:value,
        products:newProducts
    }
  })
    }

 }