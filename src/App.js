import React, {useState} from 'react';
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

function App() {

  const [showProductList,setShowProductList] = useState(true);
  const [product, setProduct] = useState(null);

  const handlePages = () => {
    setShowProductList(false)   
  }

  const handleDetail = (product) => {
    setProduct(product)
  } 

  const handleBack = () => {
    setShowProductList(true)
  }

  return (

      <div className = 'App'>
        <header className ='Header-App'>

          {
            showProductList ?
              <ProductList handlePages = {handlePages} handleDetail = {handleDetail} />
            :
              <ProductDetail  handlePages = {handlePages} handleDetail = {product} handleBack = {handleBack}/>
          }
          

          
        </header>
      </div>
  )

}


export default App