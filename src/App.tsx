import { useEffect, useState } from "react"
import { MainContainer, ProductsSection } from "./App.module"
import Header from "./components/header/Header"

import ProductDetails from "./components/product-details/ProductDetails"

import AddProductModal from "./components/add-product/AddProductModal"
import Pagination from "./components/pagination/Pagination"
import { ProductProps } from "./lib/store"

function App() {

  let retrieveData = JSON.parse(localStorage.getItem('products') || '')  
  const [products, setProducts] = useState(() => {
    return retrieveData.map((el: ProductProps) => {
      return {...el, creation_date: new Date(el.creation_date)}
    })
    // return productsArr
  })
  const [selectedProduct, setSelectedProduct] = useState<ProductProps>(products[0] ?? null)
  const [addProduct, setAddProduct] = useState(false)

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  return (
    <MainContainer>
      {addProduct && <AddProductModal {...{setAddProduct, setProducts}} />}
      <Header />
      <ProductsSection>
        <Pagination {...{products, setSelectedProduct, setProducts, selectedProduct, setAddProduct}} itemsPerPage={5} />
        <ProductDetails product={selectedProduct} {...{setProducts}} />
      </ProductsSection>
    </MainContainer>
  )
}

export default App
